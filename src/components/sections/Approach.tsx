import { motion } from 'framer-motion';
import SmoothTabs from '../SmoothTabs';

export default function Approach() {
  return (
    <section
      id="approach"
      className="py-20 border-t-2"
      style={{
        backgroundColor: 'var(--bg-primary)',
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
            My Approach
          </h2>

          <p
            className="reading-text-small max-w-3xl mb-12"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.25rem'
            }}
          >
            User-first thinking paired with data-driven decisions — balancing vision with pragmatism to ship what matters most
          </p>

          <div
            className="h-1 w-32 mb-12"
            style={{ backgroundColor: 'var(--border-primary)' }}
          />

          {/* Tabs */}
          <SmoothTabs
            tabs={[
              {
                id: 'discovery',
                label: 'Discovery',
                content: (
                  <div className="space-y-6">
                    <h3
                      className="text-2xl md:text-3xl font-black uppercase mb-4"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Continuous Discovery
                    </h3>
                    <p
                      className="reading-text-small text-lg mb-6"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Building the right thing starts with deep customer understanding and continuous learning.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div
                        className="p-6 rounded-lg border-2"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-primary)'
                        }}
                      >
                        <h4
                          className="font-bold text-lg mb-3 uppercase"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          Customer Research
                        </h4>
                        <ul
                          className="space-y-2 reading-text-small"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <li>• Weekly customer interviews</li>
                          <li>• Assumption testing & validation</li>
                          <li>• Journey mapping & pain point analysis</li>
                          <li>• Continuous feedback loops</li>
                        </ul>
                      </div>
                      <div
                        className="p-6 rounded-lg border-2"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-primary)'
                        }}
                      >
                        <h4
                          className="font-bold text-lg mb-3 uppercase"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          Data-Driven Insights
                        </h4>
                        <ul
                          className="space-y-2 reading-text-small"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <li>• Product analytics & metrics</li>
                          <li>• A/B testing & experimentation</li>
                          <li>• Opportunity assessment frameworks</li>
                          <li>• Evidence-based prioritization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'delivery',
                label: 'Delivery',
                content: (
                  <div className="space-y-6">
                    <h3
                      className="text-2xl md:text-3xl font-black uppercase mb-4"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Rapid Execution
                    </h3>
                    <p
                      className="reading-text-small text-lg mb-6"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Ship fast, learn faster. Balancing speed with quality through empowered teams and smart execution.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div
                        className="p-6 rounded-lg border-2"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-primary)'
                        }}
                      >
                        <h4
                          className="font-bold text-lg mb-3 uppercase"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          Team Empowerment
                        </h4>
                        <ul
                          className="space-y-2 reading-text-small"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <li>• Outcome-driven roadmaps</li>
                          <li>• Product trio collaboration</li>
                          <li>• Autonomous decision-making</li>
                          <li>• Cross-functional alignment</li>
                        </ul>
                      </div>
                      <div
                        className="p-6 rounded-lg border-2"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-primary)'
                        }}
                      >
                        <h4
                          className="font-bold text-lg mb-3 uppercase"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          Iterative Shipping
                        </h4>
                        <ul
                          className="space-y-2 reading-text-small"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <li>• MVP-first approach</li>
                          <li>• Continuous delivery practices</li>
                          <li>• Feature flagging & rollouts</li>
                          <li>• Fast iteration cycles</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              }
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
