import { motion } from 'framer-motion';
import { Search, Target, Palette, Hammer, Brain, Zap, Users, TrendingUp } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 border-t-2"
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
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: '#FFF59D' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
                  <Search size={32} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: '#2D2D2D' }}
                >
                  Research
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
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
              initial={{ opacity: 0, y: 20, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: '#FFB6D9' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
                  <Target size={32} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: '#2D2D2D' }}
                >
                  Strategy
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
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
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: '#A5D8FF' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
                  <Palette size={32} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: '#2D2D2D' }}
                >
                  Design
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
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
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: '#B2F2BB' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
                  <Hammer size={32} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: '#2D2D2D' }}
                >
                  Building
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
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
              initial={{ opacity: 0, y: 20, rotate: -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: '#E0BBE4' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
                  <Brain size={32} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: '#2D2D2D' }}
                >
                  AI & ML
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
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
              initial={{ opacity: 0, y: 20, rotate: 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: '#FFD8A8' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
                  <Zap size={32} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: '#2D2D2D' }}
                >
                  Experimentation
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
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
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: '#FFCCCB' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
                  <Users size={32} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: '#2D2D2D' }}
                >
                  Leadership
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
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
              initial={{ opacity: 0, y: 20, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: '#C1F0C1' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md" style={{ color: '#2D2D2D' }}>
                  <TrendingUp size={32} />
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase"
                  style={{ color: '#2D2D2D' }}
                >
                  Growth
                </h3>
              </div>
              <ul className="space-y-2 reading-text-small" style={{ color: '#2D2D2D' }}>
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
