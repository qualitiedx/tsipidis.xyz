import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tighter leading-extra-tight">
            Let's Build Something
            <span className="block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-normal tracking-tight leading-relaxed">
            Have a project in mind or just want to chat about product? I'd love to hear from you.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-purple-500/50 mb-16"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} />
            Get in Touch
          </motion.a>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Twitter, href: '#', label: 'Twitter' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm mt-16"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
