import Navigation from '@/components/Navigation'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-accent-600 bg-accent-50 rounded-full">
                Portfolio 2026
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              Hi, I'm <span className="text-accent-600">Md. Akash</span>
              <span className="block text-gray-900 mt-2">Web Developer & SEO Specialist</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I build high-performance websites and optimize them for search engines.
              Specializing in modern web technologies, Core Web Vitals, and
              conversion-focused SEO strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                View My Work
              </Button>
              <Button variant="tertiary" size="lg">
                Contact Me →
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900">100/100</div>
                <div className="text-sm text-gray-500">Lighthouse</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900">+85%</div>
                <div className="text-sm text-gray-500">SEO Traffic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-gray-900">0.8s</div>
                <div className="text-sm text-gray-500">Avg. LCP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-medium mb-4">Recent Work</h2>
              <p className="text-gray-600">
                Real projects with measurable results. Each case study includes
                technical details and performance metrics.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card
                  title="E-commerce Platform"
                  description="Next.js migration with 98+ Lighthouse scores"
                  metrics={[
                    { label: 'Performance', value: '98' },
                    { label: 'Traffic', value: '+156%' }
                  ]}
                  interactive
                />
                
                <Card
                  title="News Portal SEO"
                  description="Technical SEO audit and implementation"
                  metrics={[
                    { label: 'Organic', value: '+85%' },
                    { label: 'Rankings', value: 'Top 3' }
                  ]}
                  interactive
                />
                
                <Card
                  title="SaaS Dashboard"
                  description="React dashboard with real-time analytics"
                  metrics={[
                    { label: 'Load Time', value: '0.9s' },
                    { label: 'Users', value: '10K+' }
                  ]}
                  interactive
                />
                
                <Card
                  title="Blog Network"
                  description="Content strategy and technical optimization"
                  metrics={[
                    { label: 'Articles', value: '500+' },
                    { label: 'Authority', value: 'DR 65+' }
                  ]}
                  interactive
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development and SEO solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="High-performance websites using Next.js, React, and modern frameworks"
              features={['Next.js Development', 'React Applications', 'Performance Optimization', 'Responsive Design']}
            />
            
            <ServiceCard
              title="SEO Optimization"
              description="Technical SEO, content strategy, and performance monitoring"
              features={['Technical SEO Audit', 'On-Page Optimization', 'Content Strategy', 'Rank Tracking']}
            />
            
            <ServiceCard
              title="Web Performance"
              description="Core Web Vitals optimization and speed improvements"
              features={['Lighthouse Optimization', 'Image Optimization', 'Caching Strategy', 'CDN Setup']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium mb-4">Let's Work Together</h2>
            <p className="text-gray-600">
              Have a project in mind? Let's discuss how we can build something amazing.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent">
                  <option value="">Select a project type</option>
                  <option value="web-dev">Web Development</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="performance">Performance Audit</option>
                  <option value="full">Full Package</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="Tell me about your project, timeline, and goals..."
                />
              </div>
              
              <Button variant="primary" size="lg" fullWidth>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-lg font-medium text-gray-900">
                Md.<span className="text-accent-600">Akash</span>
              </div>
              <div className="text-sm text-gray-500">
                Web Developer & SEO Specialist • 2026
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-gray-500 hover:text-gray-900 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <a href="mailto:akash@mdakash.me" className="text-gray-500 hover:text-gray-900 transition-colors">
                Email
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Md. Akash. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, Tailwind CSS, and deployed on Vercel.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

// Service Card Component
const ServiceCard = ({ title, description, features }: { title: string, description: string, features: string[] }) => (
  <div className="border border-gray-200 bg-white p-6 rounded-lg hover:border-accent-300 transition-colors">
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <svg className="w-4 h-4 mr-2 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
)
