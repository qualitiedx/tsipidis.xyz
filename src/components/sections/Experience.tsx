import { motion } from 'framer-motion';
import { Search, Target, Palette, Hammer, Brain, Zap, Users, TrendingUp } from 'lucide-react';
import StickyCard from '../StickyCard';
import HoverFollowTooltip from '../HoverFollowTooltip';

export default function Experience() {
  return (
    <section
      id="experience"
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
            <StickyCard
              backgroundColor="#FFF59D"
              icon={<Search size={32} />}
              title="Research"
              items={[
                <HoverFollowTooltip
                  key="continuous-discovery"
                  text="Continuous Discovery Practices"
                  tooltipContent="A systematic approach to regularly engaging with customers to discover opportunities, validate assumptions, and inform product decisions throughout the development lifecycle."
                />,
                'Customer Development & Interviews',
                'Opportunity Assessment',
                'Evidence-Based Decision Making',
                'Product Analytics & Metrics',
                'Assumption Testing'
              ]}
              initialRotate={-1}
              finalRotate={1}
              delay={0.2}
            />

            {/* Strategy */}
            <StickyCard
              backgroundColor="#FFB6D9"
              icon={<Target size={32} />}
              title="Strategy"
              items={[
                'Product Vision & Strategy',
                'Outcome-Driven Planning',
                'Product/Market Fit',
                'Risk Assessment (Value/Usability/Feasibility/Viability)',
                'Product Positioning',
                'North Star Metrics'
              ]}
              initialRotate={1}
              finalRotate={-1}
              delay={0.3}
            />

            {/* Product & Design */}
            <StickyCard
              backgroundColor="#A5D8FF"
              icon={<Palette size={32} />}
              title="Design"
              items={[
                'Product Trio Leadership (PM/Design/Eng)',
                'Rapid Prototyping & Testing',
                'Design Thinking & Sprints',
                'User Experience Strategy',
                'Product Sense & Intuition',
                'Customer Journey Mapping'
              ]}
              initialRotate={-2}
              finalRotate={0.5}
              delay={0.4}
            />

            {/* Building & Execution */}
            <StickyCard
              backgroundColor="#B2F2BB"
              icon={<Hammer size={32} />}
              title="Building"
              items={[
                'Empowered Team Building',
                'Technical Credibility & Fluency',
                'Product Operations Excellence',
                '0-to-1 & Scaling Products',
                'Continuous Delivery',
                'Cross-Functional Collaboration'
              ]}
              initialRotate={2}
              finalRotate={-0.5}
              delay={0.5}
            />

            {/* AI & ML - NEW for 2025 */}
            <StickyCard
              backgroundColor="#E0BBE4"
              icon={<Brain size={32} />}
              title="AI & ML"
              items={[
                'AI/ML Product Strategy',
                'Model Evaluation & Metrics',
                'Data Strategy & Quality',
                'Responsible AI & Ethics',
                'Agentic Systems Design',
                'Probabilistic System Design'
              ]}
              initialRotate={-1.5}
              finalRotate={1}
              delay={0.6}
            />

            {/* Experimentation & Growth */}
            <StickyCard
              backgroundColor="#FFD8A8"
              icon={<Zap size={32} />}
              title="Experimentation"
              items={[
                'A/B Testing & Multivariate Testing',
                'Hypothesis-Driven Development',
                'Rapid Experimentation Frameworks',
                'Feature Flagging & Rollouts',
                'Learning Velocity',
                'Conversion Rate Optimization'
              ]}
              initialRotate={1.5}
              finalRotate={-1}
              delay={0.7}
            />

            {/* Leadership & Influence */}
            <StickyCard
              backgroundColor="#FFCCCB"
              icon={<Users size={32} />}
              title="Leadership"
              items={[
                'Product Evangelism',
                'Coaching & Mentoring',
                'Stakeholder Influence',
                'Team Empowerment',
                'Executive Communication',
                'Conflict Resolution'
              ]}
              initialRotate={-2}
              finalRotate={0.5}
              delay={0.8}
            />

            {/* Business & Growth */}
            <StickyCard
              backgroundColor="#C1F0C1"
              icon={<TrendingUp size={32} />}
              title="Growth"
              items={[
                'Product-Led Growth (PLG)',
                'Business Model Canvas',
                'Unit Economics & P&L',
                'Monetization Strategy',
                'Retention & Engagement',
                'Market Expansion'
              ]}
              initialRotate={1}
              finalRotate={-1}
              delay={0.9}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
