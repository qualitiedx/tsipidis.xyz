import { motion } from 'framer-motion';
import { Rocket, Code, Zap, Github } from 'lucide-react';

export default function TestCard() {
  const icons = [
    { Icon: Rocket, label: 'Fast' },
    { Icon: Code, label: 'Clean' },
    { Icon: Zap, label: 'Powerful' },
    { Icon: Github, label: 'Open' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Interactive Test Card</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {icons.map(({ Icon, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Icon className="w-8 h-8 text-purple-400" />
            <span className="text-sm text-gray-300">{label}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center text-gray-300"
      >
        This card uses <strong className="text-purple-400">Framer Motion</strong> for animations
        and <strong className="text-pink-400">Lucide React</strong> for icons.
      </motion.p>
    </motion.div>
  );
}
