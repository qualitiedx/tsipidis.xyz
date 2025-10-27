import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface HoverFollowTooltipProps {
  text: string;
  tooltipContent: string;
  className?: string;
}

export default function HoverFollowTooltip({ text, tooltipContent, className = '' }: HoverFollowTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring animations for smooth following
  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered) {
        // Add offset directly to the position values
        cursorX.set(e.clientX + 12);
        cursorY.set(e.clientY + 12);
      }
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, cursorX, cursorY]);

  return (
    <>
      <span
        className={`relative inline-block ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'help' }}
      >
        <span
          className="border-b-2 border-dashed"
          style={{ borderColor: '#2D2D2D' }}
        >
          {text}
        </span>
      </span>

      {isHovered && createPortal(
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="px-4 py-3 rounded-lg shadow-xl border-2 text-sm max-w-xs"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-primary)',
              color: 'var(--text-primary)',
              whiteSpace: 'normal',
              lineHeight: '1.4'
            }}
          >
            {tooltipContent}
          </div>
        </motion.div>,
        document.body
      )}
    </>
  );
}
