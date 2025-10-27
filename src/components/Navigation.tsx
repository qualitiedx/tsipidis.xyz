import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'industries', label: 'INDUSTRIES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'approach', label: 'APPROACH' },
    { id: 'contact', label: 'CONTACT' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b-2 border-[var(--border-primary)] bg-[var(--bg-primary)]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-3 text-2xl md:text-3xl font-black tracking-tighter uppercase cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <Logo />
              TSIPIDIS
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-bold tracking-tight uppercase transition-all cursor-pointer rounded-lg border border-transparent ${
                    activeSection === item.id
                      ? 'bg-[var(--accent-primary)] text-[var(--accent-secondary)] border-[var(--border-primary)]'
                      : 'hover:bg-[var(--bg-tertiary)] hover:border-[var(--border-primary)]'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="ml-4 p-3 border border-[var(--border-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] cursor-pointer rounded-lg"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                className="p-2 border border-[var(--border-primary)] cursor-pointer rounded-lg"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 border border-[var(--border-primary)] cursor-pointer rounded-lg"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 bg-[var(--bg-primary)] border-b-2 border-[var(--border-primary)] md:hidden"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 text-lg font-bold uppercase border border-[var(--border-primary)] cursor-pointer rounded-lg ${
                  activeSection === item.id
                    ? 'bg-[var(--accent-primary)] text-[var(--accent-secondary)]'
                    : 'bg-[var(--bg-secondary)]'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
