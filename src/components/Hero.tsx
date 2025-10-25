import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const roles = [
    'Product Leader',
    'Strategist',
    'Builder',
    'Innovator',
    'Problem Solver'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--bg-gradient)' }}>
      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            backgroundColor: 'var(--border-primary)',
            opacity: 0.1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title with Rotating Role */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 uppercase tracking-tighter leading-none">
            <div
              className="mb-2"
              style={{
                color: 'var(--text-primary)',
                transform: 'scaleY(1.3)',
                transformOrigin: 'top'
              }}
            >
              I'm a
            </div>
            <div className="relative overflow-visible min-h-[1.2em]">
              <motion.div
                key={currentRoleIndex}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  color: 'var(--bg-primary)',
                  WebkitTextStrokeWidth: '2px',
                  WebkitTextStrokeColor: 'var(--border-primary)',
                  whiteSpace: 'nowrap'
                }}
              >
                {roles[currentRoleIndex]}
              </motion.div>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="reading-text max-w-3xl mx-auto mb-12"
            style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}
          >
            Building products that matter
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border-4 uppercase font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--accent-secondary)',
                borderColor: 'var(--border-primary)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-4 uppercase font-bold tracking-tight cursor-pointer transition-all"
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-primary)'
              }}
              whileHover={{ backgroundColor: 'var(--bg-tertiary)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('experience')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: 'var(--text-secondary)' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
