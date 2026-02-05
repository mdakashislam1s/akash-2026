import { Navigation } from '@/components/system/Navigation';
import { Button } from '@/components/system/Button';
import { Card } from '@/components/system/Card';
import { PerformanceMeter } from '@/components/sections/PerformanceMeter';
import { InteractiveCode } from '@/components/sections/InteractiveCode';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* SECTION 1: HERO - The Proposition */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-accent-600 bg-accent-50 rounded-full">
                2026 Edition
              </span>
            </div>
            
            <h1 className="mb-6">
              Building the
              <span className="block text-accent-600">Web Infrastructure</span>
              of Tomorrow
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              I architect high-performance web experiences that balance 
              technical excellence with strategic SEO. For startups and 
              enterprises building the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                View Recent Work
              </Button>
              <Button variant="tertiary" size="lg">
                Read Technical Insights →
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900">+217%</div>
                <div className="text-sm text-gray-500">Core Web Vitals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900">0.9s</div>
                <div className="text-sm text-gray-500">Avg. LCP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900">100/100</div>
                <div className="text-sm text-gray-500">SEO Scores</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROOF - Interactive Demo */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid-asymmetric gap-13">
            <div>
              <h2 className="mb-4">Technical Proof</h2>
              <p className="text-gray-600">
                Real performance metrics from production systems. 
                Each project includes detailed technical documentation 
                and SEO impact analysis.
              </p>
            </div>
            
            <div>
              <InteractiveCode />
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Card
                  title="E-commerce Platform"
                  description="Next.js 15 + Headless CMS with sub-100ms API responses"
                  metrics={[
                    { label: 'LCP', value: '0.8s' },
                    { label: 'Conversions', value: '+34%' }
                  ]}
                  interactive
                />
                
                <Card
                  title="AI Research Portal"
                  description="Real-time data visualization with WebGL rendering"
                  metrics={[
                    { label: 'FPS', value: '60+' },
                    { label: 'Data Points', value: '10M+' }
                  ]}
                  interactive
                />
              </div>
            </div>
            
            <div className="hidden lg:block">
              <PerformanceMeter />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PATTERNS - Integration Architecture */}
      <section id="insights" className="py-20">
        <div className="container">
          <div className="mb-13">
            <h2 className="text-center mb-4">System Patterns</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Repeatable solutions for common challenges in modern web development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PatternCard
              title="Progressive Hydration"
              description="Critical components load instantly, non-critical hydrate on interaction"
              icon="⚡"
              patternId="hydration"
            />
            
            <PatternCard
              title="SEO-First Routing"
              description="Dynamic routes with pre-generated metadata for search engines"
              icon="🔍"
              patternId="routing"
            />
            
            <PatternCard
              title="Edge Caching Strategy"
              description="Multi-layer caching with stale-while-revalidate patterns"
              icon="📦"
              patternId="caching"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: PATHWAY - Clear Next Steps */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Start Building</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss your next project. I provide technical audits, 
            architecture planning, and full-stack implementation.
          </p>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-medium text-gray-900">48h</div>
                <div className="text-sm text-gray-500">Technical Audit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-gray-900">2-4w</div>
                <div className="text-sm text-gray-500">Prototype Build</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-medium text-gray-900">∞</div>
                <div className="text-sm text-gray-500">Ongoing Optimization</div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
              <textarea
                placeholder="Project details, timeline, and goals..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <Button variant="primary" fullWidth>
                Send Project Brief
              </Button>
            </form>
          </div>
          
          <div className="text-sm text-gray-500">
            Currently available for 2 new projects in Q1 2026
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-lg font-medium text-gray-900">
                AKASH<span className="text-accent-600">.</span>IO
              </div>
              <div className="text-sm text-gray-500">
                Web Development & SEO Architecture • 2026
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// Helper Components
const PatternCard = ({ title, description, icon, patternId }) => (
  <div className="border border-gray-200 bg-white p-6 hover:border-accent-300 transition-colors group">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-sm text-accent-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
      View implementation
      <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);
