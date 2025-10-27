import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface SmoothTabsProps {
  tabs: Tab[];
}

export default function SmoothTabs({ tabs }: SmoothTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex gap-2 border-b-2" style={{ borderColor: 'var(--border-primary)' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-6 py-3 font-bold uppercase text-sm tracking-tight transition-colors cursor-pointer"
            style={{
              color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-secondary)'
            }}
          >
            {tab.label}

            {/* Animated Indicator */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: 'var(--accent-primary)' }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          >
            {activeContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
