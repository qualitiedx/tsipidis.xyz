import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const industries = [
  'HEALTHCARE',
  'FINTECH',
  'MEDIA & STREAMING',
  'CLOUD & SAAS',
  'SOCIAL NETWORKS',
  'B2B PLATFORMS'
];

function IndustryItem({ industry }: { industry: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '-49% 0px -49% 0px' // Triggers only when item is very close to center - ensures only one item highlighted
  });

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: isInView ? 1 : 0.3,
        scale: isInView ? 1 : 0.95
      }}
      transition={{ duration: 0.3 }}
      style={{ willChange: 'opacity, transform' }}
    >
      <h3
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter"
        style={{
          color: 'var(--text-primary)',
          textAlign: 'center'
        }}
      >
        {industry}
      </h3>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-20 border-t-2"
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
            Industries
          </h2>

          <p
            className="reading-text-small max-w-3xl mb-12"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.25rem'
            }}
          >
            Diverse experience across multiple industries, bringing cross-functional insights to every product
          </p>

          <div
            className="h-1 w-32 mb-12"
            style={{ backgroundColor: 'var(--border-primary)' }}
          />

          {/* Industries List */}
          <div className="py-20 space-y-4">
            {industries.map((industry) => (
              <IndustryItem key={industry} industry={industry} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
