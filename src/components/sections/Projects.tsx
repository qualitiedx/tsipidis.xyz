import { motion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';

export default function Projects() {
  const { theme } = useTheme();
  return (
    <section
      id="projects"
      className="min-h-screen py-20 border-t-4"
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
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-6 tracking-tighter"
            style={{ color: 'var(--text-primary)' }}
          >
            Projects
          </h2>

          <p
            className="reading-text-small max-w-3xl mb-12"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.25rem'
            }}
          >
            From zero to one products that scaled to millions of users — each solving real problems with thoughtful execution
          </p>

          <div
            className="h-1 w-32 mb-12"
            style={{ backgroundColor: 'var(--border-primary)' }}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pfizer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-4 overflow-hidden cursor-pointer"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <img
                  src="https://www.pfizer.com/profiles/pfecpfizercomus_profile/themes/pfecpfizercomus/public/assets/images/logo-blue.svg"
                  alt="Pfizer Logo"
                  className="w-[48%] h-auto object-contain p-8"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl md:text-3xl font-black uppercase mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  PFIZER
                </h3>
                <p
                  className="text-sm font-bold uppercase mb-4"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Digital Product Manager
                </p>
                <p className="reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                  PfizerPro global platform rolled-out to 145+ markets. $80M+ project.
                </p>
              </div>
            </motion.div>

            {/* AppTVplus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-4 overflow-hidden cursor-pointer"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <img
                  src="/logos/apptvsvg.svg"
                  alt="AppTVplus Logo"
                  className="w-[48%] h-auto object-contain p-8"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl md:text-3xl font-black uppercase mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  APPTVPLUS
                </h3>
                <p
                  className="text-sm font-bold uppercase mb-4"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Founder
                </p>
                <p className="reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                  IPTV/Live TV streaming platform delivering content to thousands of users.
                </p>
              </div>
            </motion.div>

            {/* Lavva.io */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-4 overflow-hidden cursor-pointer"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <img
                  src="/logos/logo-lavva-io.png"
                  alt="Lavva.io Logo"
                  className="w-[48%] h-auto object-contain p-8"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl md:text-3xl font-black uppercase mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  LAVVA.IO
                </h3>
                <p
                  className="text-sm font-bold uppercase mb-4"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  General Manager
                </p>
                <p className="reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                  Live data streaming technologies on the cloud, offered as managed services.
                </p>
              </div>
            </motion.div>

            {/* Interworks.Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border-4 overflow-hidden cursor-pointer"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <img
                  src={theme === 'dark' ? '/logos/white_transparen.png' : '/logos/blue_transparent.png'}
                  alt="Infiterra (formerly Interworks.Cloud) Logo"
                  className="w-[60%] h-auto object-contain p-8"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl md:text-3xl font-black uppercase mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  INFITERRA
                </h3>
                <p
                  className="text-sm font-bold uppercase mb-4"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Product Manager
                </p>
                <p className="reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                  B2B Cloud Brokerage Platform. 100+ customers, $120M yearly transactions, +120% revenue growth.
                </p>
              </div>
            </motion.div>

            {/* Urnovl.co */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border-4 overflow-hidden cursor-pointer"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <svg className="w-[48%] h-auto p-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 53.997" style={{ fill: 'var(--text-primary)' }}>
                  <path d="M35.252,15.875v36.373h-9.375v-2.922C23.025,51.873,19.576,53,16.053,53c-5.025,0-9.527-2.326-12.377-5.852
                       C1.352,44.299,0,40.55,0,35.15V15.875h9.752v19.648c0,3.302,0.676,4.951,1.799,6.226c1.5,1.651,3.6,2.253,5.475,2.253
                       c4.125,0,7.125-2.779,8.475-4.502V15.875H35.252z"/>
                  <path d="M64.119,24.5c-0.675-0.225-2.098-0.375-3.523-0.375c-4.275,0-7.65,3.074-8.85,5.25v22.873h-9.752V15.875
                       h9.375v3.676c2.176-2.701,6.15-4.426,10.576-4.426c1.426,0,2.25,0.15,3.3,0.3L64.119,24.5z"/>
                  <path d="M68.242,52.248V15.876h9.373v2.926c2.775-2.252,6.227-3.677,10.277-3.677c5.023,0,9.6,2.25,12.599,5.849
                       c2.401,2.851,3.75,6.526,3.75,12.751v18.523H94.49V32.976c0-3.601-0.822-5.476-2.174-6.827c-1.273-1.273-3.225-2.023-5.477-2.023
                       c-4.121,0-7.499,2.626-8.849,4.5v23.623H68.242z"/>
                  <path d="M128.086,15.125c11.024,0,19.348,8.477,19.348,18.973c0,10.5-8.323,19.125-19.348,19.125
                       c-11.025,0-19.35-8.625-19.35-19.125C108.736,23.602,117.061,15.125,128.086,15.125z M128.086,43.773
                       c5.85,0,9.525-4.5,9.525-9.675c0-5.175-3.675-9.523-9.525-9.523s-9.525,4.349-9.525,9.523
                       C118.561,39.273,122.236,43.773,128.086,43.773z"/>
                  <path d="M177.375,15.875l-12.45,36.373h-9.375l-12.449-36.373h10.35l7.274,23.774l7.5-23.774H177.375z"/>
                  <path d="M179.85,0h9.75v52.248h-9.75V0z"/>
                </svg>
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl md:text-3xl font-black uppercase mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  URNOVL.CO
                </h3>
                <p
                  className="text-sm font-bold uppercase mb-4"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  General Manager
                </p>
                <p className="reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                  Social network for readers, writers & publishers. 10,000+ stories.
                </p>
              </div>
            </motion.div>

            {/* Spotware Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="border-4 overflow-hidden cursor-pointer"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <img
                  src={theme === 'dark' ? '/logos/Spotware logo light + safespace.svg' : '/logos/Spotware logo dark + safespace.svg'}
                  alt="Spotware Systems Logo"
                  className="w-[60%] h-auto object-contain p-8"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-2xl md:text-3xl font-black uppercase mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  SPOTWARE SYSTEMS
                </h3>
                <p
                  className="text-sm font-bold uppercase mb-4"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Product Manager
                </p>
                <p className="reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                  Trading B2B Platform for Brokerage Firms. $12M raised, $10M+ revenues.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
