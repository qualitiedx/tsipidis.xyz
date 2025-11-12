import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/landing-urnovl/young-author-woman.jpg',
    subtitle: 'Start writing your dream story today',
  },
  {
    image: '/landing-urnovl/another-young-author.jpg',
    subtitle: 'Discover stories that move you',
  },
  {
    image: '/landing-urnovl/nerd-asian.jpg',
    subtitle: 'Build your writing community through Pages',
  },
  {
    image: '/landing-urnovl/author-book-presentation.jpg',
    subtitle: 'Share your story with the world',
  },
  {
    image: '/landing-urnovl/senior-woman-author.jpg',
    subtitle: 'Find your next favorite author',
  },
  {
    image: '/landing-urnovl/man-writer-nerd.jpg',
    subtitle: 'Turn your imagination into reality',
  },
];

// Generate blob shape - starting with perfect circle
const generateRandomBlob = () => {
  const radius = 90;
  return { radius, cx: 0, cy: 0 };
};

export default function CardStackHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [blobShapes, setBlobShapes] = useState<{ radius: number; cx: number; cy: number }[]>([]);
  const [targetIndex, setTargetIndex] = useState(0);
  const [revealDirection, setRevealDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [circleHidden, setCircleHidden] = useState(false);
  const [lockedRevealIndex, setLockedRevealIndex] = useState<number | null>(null);
  const [transitionScale, setTransitionScale] = useState<number>(1);
  const [cursorText, setCursorText] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTransitionCompleteRef = useRef<number>(0);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blobScale = useMotionValue(1);

  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const smoothScale = useSpring(blobScale, { stiffness: 200, damping: 25 });

  // Cursor follower
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { stiffness: 150, damping: 20 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 150, damping: 20 });

  // Lock scale during transition to maintain growth pattern
  const effectiveScale = isTransitioning ? transitionScale : smoothScale;

  // Keep circle at cursor position always
  const effectiveX = smoothMouseX;
  const effectiveY = smoothMouseY;

  // Initialize blob shapes
  useEffect(() => {
    const initialShape = generateRandomBlob();
    setBlobShapes([initialShape, initialShape]);
  }, []);

  // Handle click-based transition
  const handleTransition = (direction: 'prev' | 'next') => {
    if (isTransitioning) return;

    const now = Date.now();
    const isInCooldown = now - lastTransitionCompleteRef.current < 1000;
    if (isInCooldown) return;

    // Get current scale and lock it for the transition
    const currentScale = smoothScale.get();
    setTransitionScale(currentScale);

    // Lock transition
    setIsTransitioning(true);

    // Set target index
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + slides.length) % slides.length
      : (currentIndex + 1) % slides.length;
    setTargetIndex(newIndex);

    // Lock reveal index to prevent flash
    setLockedRevealIndex(newIndex);

    // Get viewport diagonal for full expansion
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const diagonal = Math.sqrt(rect.width * rect.width + rect.height * rect.height);

      // Expand circle from base radius to full screen (scale is locked separately)
      setBlobShapes([{ radius: 90, cx: 0, cy: 0 }, { radius: diagonal * 3, cx: 0, cy: 0 }]);

      // Wait for expansion to complete, then swap background image
      setTimeout(() => {
        // NOW swap the background image while circle is at 100%
        setCurrentIndex(newIndex);
        lastTransitionCompleteRef.current = Date.now();

        // Immediately hide circle after swapping
        setTimeout(() => {
          setBlobShapes([{ radius: 0, cx: 0, cy: 0 }, { radius: 0, cx: 0, cy: 0 }]);
          setCircleHidden(true);
          setIsTransitioning(false);
          // Don't unlock reveal index yet - wait until circle is revealed again
        }, 50);
      }, 1950); // Swap just before full expansion completes
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update cursor follower position
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);

        // Calculate distance from center for scaling
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distanceX = Math.abs(x - centerX);
        const distanceY = Math.abs(y - centerY);
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
        const currentDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        // Scale from 0.2 (center) to 5 (edges) - much smaller near center
        const scale = 0.2 + (currentDistance / maxDistance) * 4.8;

        mouseX.set(x);
        mouseY.set(y);
        blobScale.set(scale);
        setMousePos({ x, y });

        // If circle is hidden, animate it back from zero to current size
        if (circleHidden) {
          setCircleHidden(false);
          setBlobShapes([{ radius: 0, cx: 0, cy: 0 }, { radius: 90, cx: 0, cy: 0 }]);
          // Unlock reveal index now that circle is visible
          setLockedRevealIndex(null);
        }

        // Determine reveal direction based on cursor position
        const leftZone = rect.width * 0.25;
        const rightZone = rect.width * 0.75;
        const topZone = rect.height * 0.25;
        const bottomZone = rect.height * 0.75;

        // Only show cursor text if in the active vertical zone (25%-75%)
        if (y >= topZone && y <= bottomZone) {
          if (x < leftZone) {
            setRevealDirection('prev');
            setCursorText('Previous');
          } else if (x > rightZone) {
            setRevealDirection('next');
            setCursorText('Next');
          } else {
            // In the middle 50%, don't show cursor text
            setCursorText('');
            if (x < centerX) {
              setRevealDirection('prev');
            } else {
              setRevealDirection('next');
            }
          }
        } else {
          // Outside vertical zone, don't show cursor text
          setCursorText('');
          if (x < centerX) {
            setRevealDirection('prev');
          } else {
            setRevealDirection('next');
          }
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const leftZone = rect.width * 0.25;
        const rightZone = rect.width * 0.75;
        const topZone = rect.height * 0.25;
        const bottomZone = rect.height * 0.75;

        // Only allow clicks in the 25% left and 25% right zones, and between 25%-75% vertically
        if (y >= topZone && y <= bottomZone) {
          if (x < leftZone) {
            handleTransition('prev');
          } else if (x > rightZone) {
            handleTransition('next');
          }
        }
        // Outside zones do nothing on click
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [mouseX, mouseY, blobScale, cursorX, cursorY, currentIndex, isTransitioning, circleHidden]);

  // Determine which card to reveal based on cursor position or transition
  const revealIndex = lockedRevealIndex !== null
    ? lockedRevealIndex
    : revealDirection === 'next'
      ? (currentIndex + 1) % slides.length
      : (currentIndex - 1 + slides.length) % slides.length;

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Clickable zones - Left 25% and Right 25%, vertical 25%-75% */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[100]">
        {/* Left 25% clickable zone */}
        <div
          className="absolute left-0 pointer-events-auto cursor-pointer"
          style={{ width: '25%', top: '25%', height: '50%' }}
        />
        {/* Right 25% clickable zone */}
        <div
          className="absolute right-0 pointer-events-auto cursor-pointer"
          style={{ width: '25%', top: '25%', height: '50%' }}
        />
      </div>

      {/* Current Image - Always visible as background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.3) 100%)',
          }}
        />
      </div>

      {/* Reveal Layer - Shows next/previous image through circle mask */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" style={{ isolation: 'isolate' }}>
          <defs>
            {/* Circle mask that reveals the image below */}
            <mask id="cursor-reveal-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="black" />
              {blobShapes.length >= 2 && blobShapes[1]?.radius !== undefined && (
                <motion.circle
                  fill="white"
                  cx={0}
                  cy={0}
                  style={{
                    x: effectiveX,
                    y: effectiveY,
                    scale: effectiveScale,
                  }}
                  animate={{ r: blobShapes[1].radius }}
                  transition={{
                    duration: isTransitioning ? 2 : (blobShapes[0].radius === 0 && blobShapes[1].radius === 90) ? 0.3 : 0,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              )}
            </mask>
          </defs>

          <foreignObject
            x="0"
            y="0"
            width="100%"
            height="100%"
            mask="url(#cursor-reveal-mask)"
          >
            <motion.div
              className="w-full h-full relative"
              animate={{
                scale: isTransitioning ? 1 : 1.05,
              }}
              transition={{
                duration: isTransitioning ? 2 : 0,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <img
                src={slides[revealIndex].image}
                alt={`Reveal Slide ${revealIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.3) 100%)',
                }}
              />
            </motion.div>
          </foreignObject>
        </svg>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-end justify-start">
        <div className="text-left px-8 pb-24">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl max-w-4xl"
            style={{
              color: '#ffffff',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              minHeight: '3rem',
              textTransform: 'none',
              lineHeight: '1',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={lockedRevealIndex ?? currentIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap justify-start gap-x-3"
              >
                {slides[lockedRevealIndex ?? currentIndex].subtitle.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: wordIndex * 0.03,
                          ease: [0.33, 1, 0.68, 1],
                        },
                      },
                      exit: {
                        opacity: 0,
                        y: -50,
                        transition: {
                          duration: 0.3,
                          delay: wordIndex * 0.01,
                        },
                      },
                    }}
                    style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </h1>

          {/* Progress Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-2 justify-start mt-6"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className="w-3 h-3 rounded-full border-2 transition-all cursor-pointer"
                style={{
                  borderColor: '#ffffff',
                  backgroundColor: index === currentIndex ? '#ffffff' : 'transparent',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Helper text for interaction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-24 right-8 text-white text-sm font-bold z-20"
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        }}
      >
        Move cursor to reveal
      </motion.div>

      {/* Cursor Follower */}
      <motion.div
        className="fixed pointer-events-none z-50 px-6 py-3 rounded-full text-white font-medium text-sm"
        style={{
          x: smoothCursorX,
          y: smoothCursorY,
          translateX: '10px',
          translateY: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          fontFamily: "'Open Sans', sans-serif",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: cursorText ? 1 : 0, scale: cursorText ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {cursorText}
      </motion.div>
    </section>
  );
}
