import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Projects
          </h2>
          <div className="h-px bg-gradient-to-r from-pink-500 to-transparent mb-12" />

          {/* Content will go here */}
          <div className="text-gray-400 text-center py-20">
            Project showcase will be added here
          </div>
        </motion.div>
      </div>
    </section>
  );
}
