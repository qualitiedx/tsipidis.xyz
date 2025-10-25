import { motion } from 'framer-motion';

export default function Approach() {
  return (
    <section
      id="approach"
      className="min-h-screen py-20 border-t-4"
      style={{
        backgroundColor: 'var(--bg-primary)',
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
            My Approach
          </h2>

          <p
            className="reading-text-small max-w-3xl mb-12"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.25rem'
            }}
          >
            User-first thinking paired with data-driven decisions — balancing vision with pragmatism to ship what matters most
          </p>

          <div
            className="h-1 w-32 mb-12"
            style={{ backgroundColor: 'var(--border-primary)' }}
          />

          {/* Content will go here */}
          <div
            className="text-center py-20 uppercase text-sm tracking-wide"
            style={{ color: 'var(--text-secondary)' }}
          >
            Product leadership approach and methodology will be added here
          </div>
        </motion.div>
      </div>
    </section>
  );
}
