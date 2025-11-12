import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  createdAt: number;
}

interface Story {
  id: number;
  title: string;
  author: string;
  cover: string;
  genre: string;
  offset: string;
}

const stories: Story[] = [
  { id: 1, title: 'The Last Kingdom', author: 'Sarah Chen', cover: '/landing-urnovl/young-author-woman.jpg', genre: 'Fantasy', offset: '-20%' },
  { id: 2, title: 'Midnight Tales', author: 'Alex Rivera', cover: '/landing-urnovl/another-young-author.jpg', genre: 'Mystery', offset: '10%' },
  { id: 3, title: 'Digital Dreams', author: 'Maya Park', cover: '/landing-urnovl/nerd-asian.jpg', genre: 'Sci-Fi', offset: '-40%' },
  { id: 4, title: 'Summer Nights', author: 'James Wilson', cover: '/landing-urnovl/author-book-presentation.jpg', genre: 'Romance', offset: '5%' },
  { id: 5, title: 'Whispers', author: 'Elena Stone', cover: '/landing-urnovl/senior-woman-author.jpg', genre: 'Thriller', offset: '-15%' },
  { id: 6, title: 'Code Red', author: 'Tom Harper', cover: '/landing-urnovl/man-writer-nerd.jpg', genre: 'Action', offset: '15%' },
  { id: 7, title: 'Lost Memories', author: 'Lisa Chang', cover: '/landing-urnovl/young-author-woman.jpg', genre: 'Drama', offset: '-30%' },
  { id: 8, title: 'Ocean Deep', author: 'Chris Morgan', cover: '/landing-urnovl/another-young-author.jpg', genre: 'Adventure', offset: '8%' },
];

export default function Stories() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailPointsRef = useRef<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();
  const lastPointTime = useRef(0);
  const isActiveRef = useRef(false);
  const MAX_TRAIL_POINTS = 35;
  const TRAIL_DURATION = 2000; // milliseconds

  // Canvas rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const render = () => {
      const now = Date.now();

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail points
      trailPointsRef.current = trailPointsRef.current.filter((point) => {
        const age = now - point.createdAt;
        if (age > TRAIL_DURATION) return false;

        // Calculate animation progress (0 to 1)
        const progress = age / TRAIL_DURATION;

        // Animate opacity: fade in quickly, fade out slowly
        const opacity = progress < 0.15 ? progress * 6.67 : 1 - (progress - 0.15) / 0.85;

        // Animate scale: grow from 0.5 to 2.5
        const scale = 0.5 + (2 * progress);

        // Draw gradient circle
        const radius = 180 * scale;
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);

        gradient.addColorStop(0, `rgba(102, 126, 234, ${0.5 * opacity})`);
        gradient.addColorStop(0.3, `rgba(118, 75, 162, ${0.35 * opacity})`);
        gradient.addColorStop(0.6, `rgba(118, 75, 162, ${0.2 * opacity})`);
        gradient.addColorStop(1, 'rgba(118, 75, 162, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(point.x - radius, point.y - radius, radius * 2, radius * 2);

        return true;
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isActiveRef.current) return;

      const now = Date.now();
      if (now - lastPointTime.current < 30) return;
      lastPointTime.current = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newPoint: TrailPoint = {
        x,
        y,
        opacity: 1,
        scale: 0.5,
        createdAt: now,
      };

      trailPointsRef.current.push(newPoint);

      // Limit trail points
      if (trailPointsRef.current.length > MAX_TRAIL_POINTS) {
        trailPointsRef.current.shift();
      }
    };

    const handleMouseEnter = () => {
      isActiveRef.current = true;
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    };

    const handleMouseLeave = () => {
      isActiveRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update canvas size on mount and resize
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section ref={containerRef} className="w-full py-20 px-8 relative" style={{ height: '90vh', overflowX: 'hidden' }}>
      {/* Cursor Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Scrolling Ticker with Overlay Title - Full Width */}
      <div className="relative mb-16">
        <div className="relative w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', paddingTop: '300px' }}>
          {/* Title Overlay - Inside ticker container */}
          <div
            className="absolute top-0 left-0 right-0 z-30 pointer-events-none px-8"
            style={{ mixBlendMode: 'difference' }}
          >
            <h2
              className="text-2xl md:text-4xl lg:text-5xl max-w-4xl"
              style={{
                color: '#ffffff',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                textTransform: 'none',
                lineHeight: '1',
              }}
            >
              Stories Powered by Community
            </h2>
          </div>
          <div className="flex gap-6">
            <motion.div
              className="flex gap-6 flex-shrink-0"
              animate={{
                x: [0, -stories.length * 286 * 2], // 280px + 6px gap
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {[...stories, ...stories].map((story, index) => (
                <div
                  key={`${story.id}-${index}`}
                  className="flex-shrink-0 relative"
                  style={{
                    width: '280px',
                    height: '400px',
                    top: story.offset,
                  }}
                >
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg relative group cursor-pointer">
                    <img
                      src={story.cover}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.3) 100%)',
                      }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div
                          className="text-xs uppercase tracking-wide mb-2"
                          style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontFamily: "'Open Sans', sans-serif",
                          }}
                        >
                          {story.genre}
                        </div>
                        <h3
                          className="text-xl font-semibold mb-2"
                          style={{
                            color: '#ffffff',
                            fontFamily: "'Open Sans', sans-serif",
                          }}
                        >
                          {story.title}
                        </h3>
                        <p
                          className="text-sm"
                          style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontFamily: "'Open Sans', sans-serif",
                          }}
                        >
                          by {story.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Second set for seamless loop */}
            <motion.div
              className="flex gap-6 flex-shrink-0"
              animate={{
                x: [0, -stories.length * 286 * 2],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {[...stories, ...stories].map((story, index) => (
                <div
                  key={`duplicate-${story.id}-${index}`}
                  className="flex-shrink-0 relative"
                  style={{
                    width: '280px',
                    height: '400px',
                    top: story.offset,
                  }}
                >
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg relative group cursor-pointer">
                    <img
                      src={story.cover}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.3) 100%)',
                      }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div
                          className="text-xs uppercase tracking-wide mb-2"
                          style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontFamily: "'Open Sans', sans-serif",
                          }}
                        >
                          {story.genre}
                        </div>
                        <h3
                          className="text-xl font-semibold mb-2"
                          style={{
                            color: '#ffffff',
                            fontFamily: "'Open Sans', sans-serif",
                          }}
                        >
                          {story.title}
                        </h3>
                        <p
                          className="text-sm"
                          style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontFamily: "'Open Sans', sans-serif",
                          }}
                        >
                          by {story.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtitle below ticker */}
      <div className="w-full max-w-6xl relative z-10">
        <p
          className="text-lg md:text-xl lg:text-2xl max-w-3xl"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 300,
            lineHeight: '1.5',
          }}
        >
          Urnovl is the best place to build community with your readers, share your stories, and turn your passion for writing into a lasting creative business.
        </p>
      </div>
    </section>
  );
}
