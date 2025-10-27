import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);
  const progress = useMotionValue(0);

  // Transform progress (0-100) to clip-path inset value (100% to 0%)
  const clipPath = useTransform(
    progress,
    [0, 100],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  );

  useEffect(() => {
    // Animate the fill from 0% to 100%
    const controls = animate(progress, 100, {
      duration: 2,
      ease: 'easeInOut',
      onComplete: () => {
        // Wait a moment then fade out
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onLoadingComplete, 500); // Match fade out duration
        }, 300);
      }
    });

    return controls.stop;
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="relative">
        {/* Background text (low opacity) */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
          style={{
            color: 'var(--text-primary)',
            opacity: 0.2
          }}
        >
          TSIPIDIS
        </h1>

        {/* Fill text (animated with clip-path) */}
        <motion.h1
          className="absolute inset-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
          style={{
            color: 'var(--accent-primary)',
            clipPath,
            willChange: 'clip-path',
            zIndex: 1
          }}
        >
          TSIPIDIS
        </motion.h1>
      </div>
    </motion.div>
  );
}
