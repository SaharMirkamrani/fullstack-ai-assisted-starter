import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-6 py-16 relative">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 mb-6">
            <span className="mr-2">🚀</span>
            Fullstack AI-Assisted Starter
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            Build Faster
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> with AI</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive fullstack boilerplate designed specifically for AI-assisted development. 
            Pre-configured with security best practices, testing frameworks, and AI prompt templates 
            to accelerate your development workflow while maintaining code quality and security standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="default" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-2.5 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
            <Link href="/demo">
              <Button variant="outline" size="default" className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 text-base font-medium transition-all duration-300 transform hover:scale-105">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-semibold text-blue-600 mb-1">100%</div>
              <div className="text-xs text-gray-600">Security Focused</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-purple-600 mb-1">50+</div>
              <div className="text-xs text-gray-600">AI Prompts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-green-600 mb-1">24/7</div>
              <div className="text-xs text-gray-600">AI Ready</div>
            </div>
          </div>
        </div>

        {/* What This Project Does */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">What This Project Does</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This starter kit provides everything you need to build secure, scalable applications 
              with AI assistance while following industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-6 rounded-xl border border-gray-200 bg-white/50 hover:bg-white hover:border-blue-300 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🔐</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Security-First Development</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Built-in security measures and guidelines specifically designed for AI-assisted development
                  </p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      Comprehensive security documentation
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      Pre-configured authentication
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      Input validation patterns
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      Rate limiting & abuse prevention
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-gray-200 bg-white/50 hover:bg-white hover:border-blue-300 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Development Support</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Optimized for working with AI coding assistants like Cursor, GitHub Copilot, and Claude
                  </p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                      Pre-configured Cursor AI rules
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                      Comprehensive prompt templates
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                      Security-focused AI prompts
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                      Debugging & testing libraries
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-gray-200 bg-white/50 hover:bg-white hover:border-blue-300 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🧪</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing & Quality Assurance</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Comprehensive testing strategies and quality assurance processes
                  </p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                      Unit, integration & E2E testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                      Automated security testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                      Code quality tools & linting
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                      Performance monitoring
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-gray-200 bg-white/50 hover:bg-white hover:border-blue-300 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Development Stack</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Latest technologies and best practices for scalable applications
                  </p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                      Next.js 15 with App Router
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                      TypeScript for type safety
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                      Tailwind CSS for rapid UI
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                      Express.js backend & MongoDB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
} 
