import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface CustomCursorProps {
  isActive: boolean;
  text?: string;
}

export default function CustomCursor({ isActive, text = 'More info' }: CustomCursorProps) {
  const [mounted, setMounted] = useState(false);

  // Motion values for cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring animations for smooth following
  const springConfig = { damping: 25, stiffness: 400 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x,
        y,
        pointerEvents: 'none',
        zIndex: 9999
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.5
      }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="px-4 py-2 rounded-lg shadow-xl border-2 text-sm font-bold whitespace-nowrap"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-primary)',
          color: 'var(--text-primary)',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {text}
      </div>
    </motion.div>,
    document.body
  );
}
