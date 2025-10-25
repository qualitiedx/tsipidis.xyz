import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 border-t-4"
      style={{
        background: 'var(--bg-gradient)',
        borderColor: 'var(--border-primary)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-6 tracking-tighter"
            style={{ color: 'var(--text-primary)' }}
          >
            Projects
          </h2>
          <div
            className="h-1 w-32 mb-12"
            style={{ backgroundColor: 'var(--border-primary)' }}
          />

          {/* Content will go here */}
          <div
            className="text-center py-20 uppercase text-sm tracking-wide"
            style={{ color: 'var(--text-secondary)' }}
          >
            Project showcase will be added here
          </div>
        </motion.div>
      </div>
    </section>
  );
}
