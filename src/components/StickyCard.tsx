import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StickyCardProps {
  // Visual styling
  backgroundColor: string;

  // Content - either icon or logo
  icon?: ReactNode;
  logo?: {
    src: string;
    alt: string;
    className?: string;
  };

  // Text content
  title: string;
  subtitle?: string;
  subtitleColor?: string;

  // Either list items (for experience) or description (for projects)
  items?: (string | ReactNode)[];
  description?: string;

  // Animation properties
  initialRotate?: number;
  finalRotate?: number;
  delay?: number;

  // Interaction
  onClick?: () => void;
  layoutId?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function StickyCard({
  backgroundColor,
  icon,
  logo,
  title,
  subtitle,
  subtitleColor,
  items,
  description,
  initialRotate = 0,
  finalRotate = 0,
  delay = 0,
  onClick,
  layoutId,
  onMouseEnter,
  onMouseLeave
}: StickyCardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      initial={{ opacity: 0, y: 20, rotate: initialRotate }}
      whileInView={{ opacity: 1, y: 0, rotate: finalRotate }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`rounded-lg p-8 shadow-lg ${onClick ? 'cursor-pointer' : ''}`}
      style={{
        backgroundColor,
        cursor: onMouseEnter && onMouseLeave ? 'none' : undefined
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Icon or Logo */}
      {icon && (
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
            {icon}
          </div>
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-black uppercase leading-tight flex-1 min-w-0"
            style={{
              color: '#2D2D2D',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              maxWidth: '100%'
            }}
          >
            {title}
          </h3>
        </div>
      )}

      {logo && (
        <div className="mb-6 flex justify-center">
          <img
            src={logo.src}
            alt={logo.alt}
            className={logo.className || "w-[40%] h-auto object-contain"}
          />
        </div>
      )}

      {/* Title (only shown if logo is present, as icon shows it inline) */}
      {logo && (
        <h3
          className="text-2xl md:text-3xl font-black uppercase mb-2"
          style={{
            color: '#2D2D2D',
            overflowWrap: 'break-word',
            hyphens: 'auto'
          }}
        >
          {title}
        </h3>
      )}

      {/* Subtitle (for projects - role/position) */}
      {subtitle && (
        <p
          className="text-sm font-bold uppercase mb-4"
          style={{ color: subtitleColor || '#2D2D2D' }}
        >
          {subtitle}
        </p>
      )}

      {/* List items (for experience cards) */}
      {items && items.length > 0 && (
        <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {/* Description (for project cards) */}
      {description && (
        <p className="reading-text-small" style={{ color: '#2D2D2D' }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
