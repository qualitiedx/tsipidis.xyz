import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function FloatingContactButton() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={scrollToContact}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 px-6 py-4 rounded-lg font-bold uppercase text-sm tracking-tight shadow-xl border-2 cursor-pointer flex items-center gap-2"
      style={{
        backgroundColor: 'var(--accent-primary)',
        borderColor: 'var(--border-primary)',
        color: 'var(--accent-secondary)'
      }}
    >
      <Mail size={20} />
      Contact
    </motion.button>
  );
}
