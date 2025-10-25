import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <motion.rect
        x="2"
        y="2"
        width="36"
        height="36"
        stroke="var(--border-primary)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.line
        x1="2"
        y1="2"
        x2="38"
        y2="38"
        stroke="var(--border-primary)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.polygon
        points="38,2 38,38 2,2"
        fill="var(--accent-primary)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.rect
        x="28"
        y="8"
        width="6"
        height="6"
        fill="var(--bg-primary)"
        stroke="var(--border-primary)"
        strokeWidth="1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
    </svg>
  );
}
