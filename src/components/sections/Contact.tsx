import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 border-t-4 flex items-center"
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
          className="text-center"
        >
          <h2
            className="text-5xl md:text-6xl lg:text-8xl font-black uppercase mb-6 tracking-tighter leading-none"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's Build
            <span className="block">Something</span>
            <span className="block">Together</span>
          </h2>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 uppercase tracking-wide"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a project? Let's talk.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 border-4 uppercase font-bold tracking-tight mb-16"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--accent-secondary)',
              borderColor: 'var(--border-primary)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} />
            Get in Touch
          </motion.a>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
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
                className="p-4 border-2 uppercase text-xs font-bold tracking-wide"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-primary)'
                }}
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
            className="text-xs mt-16 uppercase tracking-wider"
            style={{ color: 'var(--text-secondary)' }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
