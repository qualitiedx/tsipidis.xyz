import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeProvider';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Projects() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 border-t-2"
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
              initial={{ opacity: 0, y: 20, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-lg p-8 shadow-lg cursor-pointer"
              style={{ backgroundColor: '#A5D8FF' }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="https://www.pfizer.com/profiles/pfecpfizercomus_profile/themes/pfecpfizercomus/public/assets/images/logo-blue.svg"
                  alt="Pfizer Logo"
                  className="w-[40%] h-auto object-contain"
                />
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase mb-2"
                style={{ color: '#2D2D2D' }}
              >
                PFIZER
              </h3>
              <p
                className="text-sm font-bold uppercase mb-4"
                style={{ color: '#1864AB' }}
              >
                Digital Product Manager
              </p>
              <p className="reading-text-small" style={{ color: '#2D2D2D' }}>
                PfizerPro global platform rolled-out to 145+ markets. $80M+ project.
              </p>
            </motion.div>

            {/* AppTVplus */}
            <motion.div
              layoutId="apptvplus"
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg p-8 shadow-lg cursor-pointer"
              style={{ backgroundColor: '#FFD8A8' }}
              onClick={() => setSelectedProject('apptvplus')}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="/logos/apptvsvg.svg"
                  alt="AppTVplus Logo"
                  className="w-[40%] h-auto object-contain"
                />
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase mb-2"
                style={{ color: '#2D2D2D' }}
              >
                APPTVPLUS
              </h3>
              <p
                className="text-sm font-bold uppercase mb-4"
                style={{ color: '#D9480F' }}
              >
                Founder
              </p>
              <p className="reading-text-small" style={{ color: '#2D2D2D' }}>
                IPTV/Live TV streaming platform delivering content to thousands of users.
              </p>
            </motion.div>

            {/* Lavva.io */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-lg p-8 shadow-lg cursor-pointer"
              style={{ backgroundColor: '#BFDBFE' }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src="/logos/logo-lavva-io.png"
                  alt="Lavva.io Logo"
                  className="w-[40%] h-auto object-contain"
                />
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase mb-2"
                style={{ color: '#2D2D2D' }}
              >
                LAVVA.IO
              </h3>
              <p
                className="text-sm font-bold uppercase mb-4"
                style={{ color: '#1E40AF' }}
              >
                General Manager
              </p>
              <p className="reading-text-small" style={{ color: '#2D2D2D' }}>
                Live data streaming technologies on the cloud, offered as managed services.
              </p>
            </motion.div>

            {/* Interworks.Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-lg p-8 shadow-lg cursor-pointer"
              style={{ backgroundColor: '#FFB4C9' }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={theme === 'dark' ? '/logos/white_transparen.png' : '/logos/blue_transparent.png'}
                  alt="Infiterra (formerly Interworks.Cloud) Logo"
                  className="w-[50%] h-auto object-contain"
                />
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase mb-2"
                style={{ color: '#2D2D2D' }}
              >
                INFITERRA
              </h3>
              <p
                className="text-sm font-bold uppercase mb-4"
                style={{ color: '#BE185D' }}
              >
                Product Manager
              </p>
              <p className="reading-text-small" style={{ color: '#2D2D2D' }}>
                B2B Cloud Brokerage Platform. 100+ customers, $120M yearly transactions, +120% revenue growth.
              </p>
            </motion.div>

            {/* Urnovl.co */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-lg p-8 shadow-lg cursor-pointer"
              style={{ backgroundColor: '#FFBB9C' }}
            >
              <div className="mb-6 flex justify-center">
                <svg className="w-[40%] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 53.997" style={{ fill: '#2D2D2D' }}>
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
              <h3
                className="text-2xl md:text-3xl font-black uppercase mb-2"
                style={{ color: '#2D2D2D' }}
              >
                URNOVL.CO
              </h3>
              <p
                className="text-sm font-bold uppercase mb-4"
                style={{ color: '#C2410C' }}
              >
                General Manager
              </p>
              <p className="reading-text-small" style={{ color: '#2D2D2D' }}>
                Social network for readers, writers & publishers. 10,000+ stories.
              </p>
            </motion.div>

            {/* Spotware Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="rounded-lg p-8 shadow-lg cursor-pointer"
              style={{ backgroundColor: '#FFF59D' }}
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={theme === 'dark' ? '/logos/Spotware logo light + safespace.svg' : '/logos/Spotware logo dark + safespace.svg'}
                  alt="Spotware Systems Logo"
                  className="w-[50%] h-auto object-contain"
                />
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase mb-2"
                style={{ color: '#2D2D2D' }}
              >
                SPOTWARE SYSTEMS
              </h3>
              <p
                className="text-sm font-bold uppercase mb-4"
                style={{ color: '#F08C00' }}
              >
                Product Manager
              </p>
              <p className="reading-text-small" style={{ color: '#2D2D2D' }}>
                Trading B2B Platform for Brokerage Firms. $12M raised, $10M+ revenues.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {selectedProject === 'apptvplus' && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-60 z-50"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Content */}
              <motion.div
                layoutId="apptvplus"
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-2 rounded-xl overflow-hidden w-[90vw] max-w-[750px] max-h-[90vh] flex flex-col"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-primary)'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 border-2 border-[var(--border-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] cursor-pointer rounded-lg"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                  {/* Full-width Logo Cover */}
                  <div className="relative w-full h-64 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    <img
                      src="/logos/apptvsvg.svg"
                      alt="AppTVplus Logo"
                      className="w-[48%] h-auto object-contain p-8"
                    />
                  </div>

                  {/* Content Below */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <h2
                        className="text-2xl font-black uppercase tracking-tighter mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        APPTVPLUS
                      </h2>
                      <p
                        className="text-xs font-bold uppercase mb-3"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        Founder & Product Leader
                      </p>
                      <p
                        className="reading-text-small text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Built and scaled an IPTV/Live TV streaming platform from concept to launch, delivering seamless streaming experiences to thousands of users across multiple devices.
                      </p>
                    </div>

                    {/* Challenge */}
                    <div className="mb-8">
                      <h3
                        className="text-xl font-black uppercase mb-3 tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Challenge
                      </h3>
                      <div className="border-l-4 border-[var(--accent-primary)] pl-4 py-2">
                        <p className="reading-text-small mb-3" style={{ color: 'var(--text-secondary)' }}>
                          The streaming TV market was dominated by expensive cable subscriptions and fragmented OTT services. Users wanted:
                        </p>
                        <ul className="list-disc list-inside space-y-1 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                          <li>Affordable access to live TV channels</li>
                          <li>Multi-device streaming (TV, mobile, web)</li>
                          <li>Reliable, buffer-free streaming quality</li>
                          <li>Simple, intuitive user experience</li>
                          <li>Flexible subscription models</li>
                        </ul>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                      <h3
                        className="text-xl font-black uppercase mb-3 tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Solution
                      </h3>
                      <div className="space-y-4">
                        <div className="border-2 border-[var(--border-primary)] p-4 rounded-xl bg-[var(--bg-secondary)]">
                          <h4 className="font-bold text-base mb-2 uppercase" style={{ color: 'var(--accent-primary)' }}>
                            Product Strategy
                          </h4>
                          <ul className="space-y-1 text-sm reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                            <li>• 0-to-1 product development from ideation</li>
                            <li>• User research with target demographics</li>
                            <li>• Competitive analysis of streaming platforms</li>
                            <li>• Lean MVP approach for rapid validation</li>
                          </ul>
                        </div>

                        <div className="border-2 border-[var(--border-primary)] p-4 rounded-xl bg-[var(--bg-secondary)]">
                          <h4 className="font-bold text-base mb-2 uppercase" style={{ color: 'var(--accent-primary)' }}>
                            Technical Execution
                          </h4>
                          <ul className="space-y-1 text-sm reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                            <li>• Adaptive bitrate streaming (HLS/MPEG-DASH)</li>
                            <li>• CDN optimization for global delivery</li>
                            <li>• Native apps for iOS, Android, Smart TVs</li>
                            <li>• Real-time analytics & monitoring</li>
                          </ul>
                        </div>

                        <div className="border-2 border-[var(--border-primary)] p-4 rounded-xl bg-[var(--bg-secondary)]">
                          <h4 className="font-bold text-base mb-2 uppercase" style={{ color: 'var(--accent-primary)' }}>
                            Growth & Monetization
                          </h4>
                          <ul className="space-y-1 text-sm reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                            <li>• Tiered subscription plans (Basic/Premium)</li>
                            <li>• Free trial funnel optimization</li>
                            <li>• Referral program for viral growth</li>
                            <li>• Retention analytics & churn reduction</li>
                          </ul>
                        </div>

                        <div className="border-2 border-[var(--border-primary)] p-4 rounded-xl bg-[var(--bg-secondary)]">
                          <h4 className="font-bold text-base mb-2 uppercase" style={{ color: 'var(--accent-primary)' }}>
                            User Experience
                          </h4>
                          <ul className="space-y-1 text-sm reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                            <li>• Simplified onboarding (3-step signup)</li>
                            <li>• Personalized channel recommendations</li>
                            <li>• EPG (Electronic Program Guide) integration</li>
                            <li>• Watchlist & favorites management</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="mb-8">
                      <h3
                        className="text-xl font-black uppercase mb-3 tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Impact & Results
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="border-2 border-[var(--border-primary)] p-4 rounded-xl text-center bg-[var(--accent-primary)]">
                          <div className="text-3xl font-black mb-1" style={{ color: 'var(--accent-secondary)' }}>5K+</div>
                          <div className="text-xs font-bold uppercase" style={{ color: 'var(--accent-secondary)' }}>Active Users</div>
                        </div>
                        <div className="border-2 border-[var(--border-primary)] p-4 rounded-xl text-center bg-[var(--bg-secondary)]">
                          <div className="text-3xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>200+</div>
                          <div className="text-xs font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>Live Channels</div>
                        </div>
                        <div className="border-2 border-[var(--border-primary)] p-4 rounded-xl text-center bg-[var(--bg-secondary)]">
                          <div className="text-3xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>99.9%</div>
                          <div className="text-xs font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>Uptime</div>
                        </div>
                        <div className="border-2 border-[var(--border-primary)] p-4 rounded-xl text-center bg-[var(--bg-secondary)]">
                          <div className="text-3xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>4.5★</div>
                          <div className="text-xs font-bold uppercase" style={{ color: 'var(--text-secondary)' }}>User Rating</div>
                        </div>
                      </div>
                    </div>

                    {/* Key Learnings */}
                    <div className="pb-4">
                      <h3
                        className="text-xl font-black uppercase mb-3 tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Key Learnings
                      </h3>
                      <div className="border-l-4 border-[var(--accent-primary)] pl-4 py-2">
                        <ul className="space-y-2 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                          <li><strong>Infrastructure is critical:</strong> Invested heavily in CDN and streaming infrastructure early to ensure quality scaled with growth.</li>
                          <li><strong>User feedback loops:</strong> Weekly user interviews revealed pain points that analytics couldn't capture, shaping our roadmap.</li>
                          <li><strong>Cross-platform consistency:</strong> Maintaining feature parity across devices (iOS, Android, web, TV) was challenging but essential for retention.</li>
                          <li><strong>Content is king:</strong> Technical excellence meant nothing without compelling content partnerships and channel selection.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
