import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeProvider';
import { useState } from 'react';
import { X } from 'lucide-react';
import StickyCard from '../StickyCard';
import CustomCursor from '../CustomCursor';

export default function Projects() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  return (
    <>
      <CustomCursor isActive={isHoveringCard} text="More info" />

      <section
        id="projects"
        className="py-20 border-t-2"
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
            <StickyCard
              backgroundColor="#A5D8FF"
              logo={{
                src: "https://www.pfizer.com/profiles/pfecpfizercomus_profile/themes/pfecpfizercomus/public/assets/images/logo-blue.svg",
                alt: "Pfizer Logo"
              }}
              title="PFIZER"
              subtitle="Digital Product Manager"
              subtitleColor="#1864AB"
              description="PfizerPro global platform rolled-out to 145+ markets. $80M+ project."
              initialRotate={1}
              finalRotate={-0.5}
              delay={0.1}
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
            />

            {/* AppTVplus */}
            <StickyCard
              backgroundColor="#FFD8A8"
              logo={{
                src: "/logos/apptvsvg.svg",
                alt: "AppTVplus Logo"
              }}
              title="APPTVPLUS"
              subtitle="Founder"
              subtitleColor="#D9480F"
              description="IPTV/Live TV streaming platform delivering content to thousands of users."
              initialRotate={-1}
              finalRotate={0.5}
              delay={0.2}
              onClick={() => setSelectedProject('apptvplus')}
              layoutId="apptvplus"
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
            />

            {/* Lavva.io */}
            <StickyCard
              backgroundColor="#BFDBFE"
              logo={{
                src: "/logos/logo-lavva-io.png",
                alt: "Lavva.io Logo"
              }}
              title="LAVVA.IO"
              subtitle="General Manager"
              subtitleColor="#1E40AF"
              description="Live data streaming technologies on the cloud, offered as managed services."
              initialRotate={2}
              finalRotate={-1}
              delay={0.3}
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
            />

            {/* Interworks.Cloud */}
            <StickyCard
              backgroundColor="#FFB4C9"
              logo={{
                src: theme === 'dark' ? '/logos/white_transparen.png' : '/logos/blue_transparent.png',
                alt: "Infiterra (formerly Interworks.Cloud) Logo",
                className: "w-[50%] h-auto object-contain"
              }}
              title="INFITERRA"
              subtitle="Product Manager"
              subtitleColor="#BE185D"
              description="B2B Cloud Brokerage Platform. 100+ customers, $120M yearly transactions, +120% revenue growth."
              initialRotate={-1.5}
              finalRotate={1}
              delay={0.4}
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
            />

            {/* Urnovl.co */}
            <StickyCard
              backgroundColor="#FFBB9C"
              logo={{
                src: "/logos/urnovl-logo.svg",
                alt: "Urnovl Logo"
              }}
              title="URNOVL.CO"
              subtitle="General Manager"
              subtitleColor="#C2410C"
              description="Social network for readers, writers & publishers. 10,000+ stories."
              initialRotate={1.5}
              finalRotate={-0.5}
              delay={0.5}
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
            />

            {/* Spotware Systems */}
            <StickyCard
              backgroundColor="#FFF59D"
              logo={{
                src: theme === 'dark' ? '/logos/Spotware logo light + safespace.svg' : '/logos/Spotware logo dark + safespace.svg',
                alt: "Spotware Systems Logo",
                className: "w-[50%] h-auto object-contain"
              }}
              title="SPOTWARE SYSTEMS"
              subtitle="Product Manager"
              subtitleColor="#F08C00"
              description="Trading B2B Platform for Brokerage Firms. $12M raised, $10M+ revenues."
              initialRotate={-2}
              finalRotate={0.5}
              delay={0.6}
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
            />
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
    </>
  );
}
