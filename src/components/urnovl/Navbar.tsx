import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Nav Button with Text Reveal Effect
const NavButton = ({ href, label, getTextColor }: { href: string; label: string; getTextColor: () => string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-sm font-medium transition-all px-4 rounded-lg hover:bg-white/10 relative inline-block"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        height: '40px',
        overflow: 'hidden',
      }}
    >
      <div className="relative h-full overflow-hidden">
        <motion.div
          className="flex items-center justify-center h-full"
          animate={{ y: isHovered ? '-100%' : '0%' }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ color: getTextColor() }}
        >
          {label}
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: isHovered ? '0%' : '100%' }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ color: getTextColor() }}
        >
          {label}
        </motion.div>
      </div>
    </a>
  );
};

// Menu Button with Text Reveal Effect
const MenuButton = ({
  menuKey,
  title,
  activeMenu,
  setActiveMenu,
  getTextColor
}: {
  menuKey: string;
  title: string;
  activeMenu: string | null;
  setActiveMenu: (key: string) => void;
  getTextColor: () => string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeMenu === menuKey;

  return (
    <button
      onMouseEnter={() => {
        setActiveMenu(menuKey);
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="text-sm font-medium transition-all px-6 rounded-lg relative"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        height: '40px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Animated tab background */}
      {isActive && (
        <motion.div
          layoutId="tab-background"
          className="absolute inset-0 rounded-lg"
          style={{ backgroundColor: '#000000' }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
        />
      )}

      <div className="relative h-full overflow-hidden z-10">
        <motion.div
          className="flex items-center justify-center h-full"
          animate={{ y: isHovered ? '-100%' : '0%' }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ color: isActive ? '#ffffff' : getTextColor() }}
        >
          {title}
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: isHovered ? '0%' : '100%' }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ color: '#ffffff' }}
        >
          {title}
        </motion.div>
      </div>
    </button>
  );
};

const megaMenuData = {
  creators: {
    title: 'Creators',
    columns: [
      {
        heading: 'Writers',
        items: [
          { label: 'Start writing today', href: '#' },
          { label: 'Build your author page', href: '#' },
          { label: 'Monetize your stories', href: '#' },
          { label: 'Other writers on Urnovl', href: '#' },
        ],
      },
      {
        heading: 'Publishers',
        items: [
          { label: 'Create your publishing page', href: '#' },
          { label: 'Discover new talent', href: '#' },
          { label: 'Manage your catalog', href: '#' },
          { label: 'Other publishers on Urnovl', href: '#' },
        ],
      },
      {
        heading: 'Community Leaders',
        items: [
          { label: 'Start a writing community', href: '#' },
          { label: 'Host competitions', href: '#' },
          { label: 'Grow your audience', href: '#' },
          { label: 'Success stories', href: '#' },
        ],
      },
    ],
  },
  discover: {
    title: 'Discover',
    columns: [
      {
        heading: 'Stories',
        items: [
          { label: 'Browse all genres', href: '#' },
          { label: 'Trending now', href: '#' },
          { label: 'Editor picks', href: '#' },
          { label: 'New releases', href: '#' },
        ],
      },
      {
        heading: 'Authors',
        items: [
          { label: 'Featured writers', href: '#' },
          { label: 'Rising stars', href: '#' },
          { label: 'Find by genre', href: '#' },
          { label: 'Author spotlights', href: '#' },
        ],
      },
      {
        heading: 'Communities',
        items: [
          { label: 'Writing groups', href: '#' },
          { label: 'Genre communities', href: '#' },
          { label: 'Book clubs', href: '#' },
          { label: 'Active competitions', href: '#' },
        ],
      },
    ],
  },
  community: {
    title: 'Community',
    columns: [
      {
        heading: 'Connect',
        items: [
          { label: 'Join writing communities', href: '#' },
          { label: 'Pages & Publishers', href: '#' },
          { label: 'Discussion forums', href: '#' },
          { label: 'Community guidelines', href: '#' },
        ],
      },
      {
        heading: 'Events',
        items: [
          { label: 'Writing competitions', href: '#' },
          { label: 'Live events', href: '#' },
          { label: 'Workshops', href: '#' },
          { label: 'Community meetups', href: '#' },
        ],
      },
      {
        heading: 'Collaborate',
        items: [
          { label: 'Find co-writers', href: '#' },
          { label: 'Beta readers', href: '#' },
          { label: 'Writing partners', href: '#' },
          { label: 'Critique groups', href: '#' },
        ],
      },
    ],
  },
  resources: {
    title: 'Resources',
    columns: [
      {
        heading: 'Learn',
        items: [
          { label: 'Writing guides', href: '#' },
          { label: 'Video tutorials', href: '#' },
          { label: 'Webinars', href: '#' },
          { label: 'Writing tips', href: '#' },
        ],
      },
      {
        heading: 'Support',
        items: [
          { label: 'Help center', href: '#' },
          { label: 'Contact us', href: '#' },
          { label: 'FAQ', href: '#' },
          { label: 'Report an issue', href: '#' },
        ],
      },
      {
        heading: 'Company',
        items: [
          { label: 'About Urnovl', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Pricing', href: '#' },
        ],
      },
    ],
  },
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const getBackgroundColor = () => {
    if (activeMenu || isMobileMenuOpen || isScrolled) return 'rgba(255, 255, 255, 1)';
    return 'transparent';
  };

  const getTextColor = () => {
    return activeMenu || isScrolled || isMobileMenuOpen ? '#000000' : '#ffffff';
  };

  return (
    <>
    <nav
      className="fixed top-0 left-0 right-0 transition-all duration-300"
      style={{
        backgroundColor: getBackgroundColor(),
        zIndex: 200,
        backdropFilter: isMobileMenuOpen ? 'blur(10px)' : 'none',
      }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Navigation Menu (Left) */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div>
              <svg
                width="128"
                height="auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 53.997"
                style={{
                  fill: getTextColor(),
                  display: 'block',
                  transition: 'fill 0.3s',
                }}
              >
                <path d="M35.252,15.875v36.373h-9.375v-2.922C23.025,51.873,19.576,53,16.053,53c-5.025,0-9.527-2.326-12.377-5.852 C1.352,44.299,0,40.55,0,35.15V15.875h9.752v19.648c0,3.302,0.676,4.951,1.799,6.226c1.5,1.651,3.6,2.253,5.475,2.253 c4.125,0,7.125-2.779,8.475-4.502V15.875H35.252z" />
                <path d="M64.119,24.5c-0.675-0.225-2.098-0.375-3.523-0.375c-4.275,0-7.65,3.074-8.85,5.25v22.873h-9.752V15.875 h9.375v3.676c2.176-2.701,6.15-4.426,10.576-4.426c1.426,0,2.25,0.15,3.3,0.3L64.119,24.5z" />
                <path d="M68.242,52.248V15.876h9.373v2.926c2.775-2.252,6.227-3.677,10.277-3.677c5.023,0,9.6,2.25,12.599,5.849 c2.401,2.851,3.75,6.526,3.75,12.751v18.523H94.49V32.976c0-3.601-0.822-5.476-2.174-6.827c-1.273-1.273-3.225-2.023-5.477-2.023 c-4.121,0-7.499,2.626-8.849,4.5v23.623H68.242z" />
                <path d="M128.086,15.125c11.024,0,19.348,8.477,19.348,18.973c0,10.5-8.323,19.125-19.348,19.125 c-11.025,0-19.35-8.625-19.35-19.125C108.736,23.602,117.061,15.125,128.086,15.125z M128.086,43.773 c5.85,0,9.525-4.5,9.525-9.675c0-5.175-3.675-9.523-9.525-9.523s-9.525,4.349-9.525,9.523 C118.561,39.273,122.236,43.773,128.086,43.773z" />
                <path d="M177.375,15.875l-12.45,36.373h-9.375l-12.449-36.373h10.35l7.274,23.774l7.5-23.774H177.375z" />
                <path d="M179.85,0h9.75v52.248h-9.75V0z" />
              </svg>
            </div>

            {/* Desktop Navigation Menu - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-2">
              {Object.entries(megaMenuData).map(([key, menu]) => (
                <MenuButton
                  key={key}
                  menuKey={key}
                  title={menu.title}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  getTextColor={getTextColor}
                />
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Get Started Button - Hidden on mobile */}
            <button
              className="hidden sm:block px-6 py-2 text-sm font-bold rounded-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: activeMenu || isScrolled ? '#000000' : '#ffffff',
                color: activeMenu || isScrolled ? '#ffffff' : '#000000',
                fontFamily: "'Open Sans', sans-serif",
                cursor: 'pointer',
              }}
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              style={{ cursor: 'pointer' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke={getTextColor()}
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block overflow-hidden border-t"
            style={{
              borderColor: 'rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="w-full px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                {megaMenuData[activeMenu as keyof typeof megaMenuData].columns.map((column, colIndex) => (
                  <div key={colIndex}>
                    <div
                      className="font-semibold mb-2"
                      style={{
                        color: '#000000',
                        fontFamily: "'Open Sans', sans-serif",
                        textTransform: 'none',
                        fontSize: '16px',
                      }}
                    >
                      {column.heading}
                    </div>
                    <div className="space-y-1.5">
                      {column.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="block transition-colors"
                          style={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '13px',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 1)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    {/* Mobile Menu Drawer - Outside nav to prevent height constraints */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="lg:hidden fixed left-0 right-0 bottom-0"
          style={{
            top: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            zIndex: 190,
            height: 'calc(100vh - 80px)',
          }}
        >
          <div className="h-full overflow-y-auto px-4 py-6">
            {/* Mobile Navigation Sections */}
            {Object.entries(megaMenuData).map(([key, menu]) => (
              <div key={key} className="mb-8">
                <div
                  className="font-bold mb-4 text-lg"
                  style={{
                    color: '#000000',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  {menu.title}
                </div>
                <div className="space-y-6">
                  {menu.columns.map((column, colIndex) => (
                    <div key={colIndex}>
                      <div
                        className="font-semibold mb-2"
                        style={{
                          color: '#000000',
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: '15px',
                        }}
                      >
                        {column.heading}
                      </div>
                      <div className="space-y-2 pl-2">
                        {column.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.href}
                            className="block transition-colors"
                            style={{
                              color: 'rgba(0, 0, 0, 0.6)',
                              fontFamily: "'Open Sans', sans-serif",
                              fontSize: '14px',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 1)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Get Started Button */}
            <div className="mt-8 pb-8">
              <button
                className="w-full px-6 py-3 text-sm font-bold rounded-lg"
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  fontFamily: "'Open Sans', sans-serif",
                  cursor: 'pointer',
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
