import { motion } from 'framer-motion';

export default function Approach() {
  return (
    <section id="approach" className="min-h-screen py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            My Approach
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500 to-transparent mb-12" />

          {/* Content will go here */}
          <div className="text-gray-400 text-center py-20">
            Product leadership approach and methodology will be added here
          </div>
        </motion.div>
      </div>
    </section>
  );
}
