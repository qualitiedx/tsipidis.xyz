import { motion } from 'framer-motion';
import { Search, Target, Palette, Hammer, Brain, Zap, Users, TrendingUp } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 border-t-4"
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
            Experience
          </h2>

          <p
            className="reading-text-small max-w-3xl mb-12"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.25rem'
            }}
          >
            15+ years leading product teams and shipping solutions that drive business growth and user satisfaction
          </p>

          <div
            className="h-1 w-32 mb-12"
            style={{ backgroundColor: 'var(--border-primary)' }}
          />

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Research */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-4 p-8"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--border-primary)' }}
                >
                  <Search size={24} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Research
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                <li>Continuous Discovery Practices</li>
                <li>Customer Development & Interviews</li>
                <li>Opportunity Assessment</li>
                <li>Evidence-Based Decision Making</li>
                <li>Product Analytics & Metrics</li>
                <li>Assumption Testing</li>
              </ul>
            </motion.div>

            {/* Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-4 p-8"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--border-primary)' }}
                >
                  <Target size={24} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Strategy
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                <li>Product Vision & Strategy</li>
                <li>Outcome-Driven Planning</li>
                <li>Product/Market Fit</li>
                <li>Risk Assessment (Value/Usability/Feasibility/Viability)</li>
                <li>Product Positioning</li>
                <li>North Star Metrics</li>
              </ul>
            </motion.div>

            {/* Product & Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border-4 p-8"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--border-primary)' }}
                >
                  <Palette size={24} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Design
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                <li>Product Trio Leadership (PM/Design/Eng)</li>
                <li>Rapid Prototyping & Testing</li>
                <li>Design Thinking & Sprints</li>
                <li>User Experience Strategy</li>
                <li>Product Sense & Intuition</li>
                <li>Customer Journey Mapping</li>
              </ul>
            </motion.div>

            {/* Building & Execution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border-4 p-8"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--border-primary)' }}
                >
                  <Hammer size={24} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Building
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                <li>Empowered Team Building</li>
                <li>Technical Credibility & Fluency</li>
                <li>Product Operations Excellence</li>
                <li>0-to-1 & Scaling Products</li>
                <li>Continuous Delivery</li>
                <li>Cross-Functional Collaboration</li>
              </ul>
            </motion.div>

            {/* AI & ML - NEW for 2025 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="border-4 p-8 md:col-span-2"
              style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--accent-primary)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--accent-secondary)', backgroundColor: 'var(--accent-secondary)' }}
                >
                  <Brain size={24} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: 'var(--accent-secondary)' }}
                >
                  AI & ML
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: 'var(--accent-secondary)' }}>
                <li>AI/ML Product Strategy</li>
                <li>Model Evaluation & Metrics</li>
                <li>Data Strategy & Quality</li>
                <li>Responsible AI & Ethics</li>
                <li>Agentic Systems Design</li>
                <li>Probabilistic System Design</li>
              </ul>
            </motion.div>

            {/* Experimentation & Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="border-4 p-8"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--border-primary)' }}
                >
                  <Zap size={24} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Experimentation
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                <li>A/B Testing & Multivariate Testing</li>
                <li>Hypothesis-Driven Development</li>
                <li>Rapid Experimentation Frameworks</li>
                <li>Feature Flagging & Rollouts</li>
                <li>Learning Velocity</li>
                <li>Conversion Rate Optimization</li>
              </ul>
            </motion.div>

            {/* Leadership & Influence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="border-4 p-8"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--border-primary)' }}
                >
                  <Users size={24} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Leadership
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                <li>Product Evangelism</li>
                <li>Coaching & Mentoring</li>
                <li>Stakeholder Influence</li>
                <li>Team Empowerment</li>
                <li>Executive Communication</li>
                <li>Conflict Resolution</li>
              </ul>
            </motion.div>

            {/* Business & Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="border-4 p-8"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--border-primary)' }}
                >
                  <TrendingUp size={24} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Growth
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: 'var(--text-secondary)' }}>
                <li>Product-Led Growth (PLG)</li>
                <li>Business Model Canvas</li>
                <li>Unit Economics & P&L</li>
                <li>Monetization Strategy</li>
                <li>Retention & Engagement</li>
                <li>Market Expansion</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
