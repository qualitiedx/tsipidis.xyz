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
    <section id="about" className="relative min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-gradient)' }}>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title with Rotating Role */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 uppercase tracking-tighter leading-none">
            <span style={{ color: 'var(--text-primary)' }}>I'm a </span>
            <div className="inline-block relative overflow-hidden" style={{ minWidth: '300px' }}>
              <motion.span
                key={currentRoleIndex}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block"
                style={{ color: 'var(--text-primary)' }}
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 uppercase font-medium tracking-wide"
            style={{ color: 'var(--text-secondary)' }}
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
              className="px-8 py-4 border-4 uppercase font-bold tracking-tight"
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
              className="px-8 py-4 border-4 uppercase font-bold tracking-tight"
              style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-primary)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection('experience')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
      </div>
    </section>
  );
}
