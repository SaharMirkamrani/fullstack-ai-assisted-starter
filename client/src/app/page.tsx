import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <Badge variant="outline" className="mb-6 text-xs font-medium tracking-wide uppercase">
            Fullstack AI-Assisted Starter
          </Badge>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            Build Faster
            <span className="font-normal text-gray-600"> with AI</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            A modern fullstack boilerplate with Next.js, TypeScript, Tailwind CSS, and comprehensive AI development support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white border-0">
              Get Started
            </Button>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                View Components
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="pb-6">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-sm">⚡</span>
              </div>
              <CardTitle className="text-xl font-medium text-gray-900">Modern Stack</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs font-medium">Next.js 14</Badge>
                <Badge variant="outline" className="text-xs font-medium">TypeScript</Badge>
                <Badge variant="outline" className="text-xs font-medium">Tailwind CSS</Badge>
                <Badge variant="outline" className="text-xs font-medium">shadcn/ui</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="pb-6">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-sm">🤖</span>
              </div>
              <CardTitle className="text-xl font-medium text-gray-900">AI Enhanced</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Pre-configured AI development tools and prompt templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs font-medium">Cursor AI</Badge>
                <Badge variant="outline" className="text-xs font-medium">Prompt Templates</Badge>
                <Badge variant="outline" className="text-xs font-medium">Code Generation</Badge>
                <Badge variant="outline" className="text-xs font-medium">Best Practices</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="pb-6">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-sm">🎯</span>
              </div>
              <CardTitle className="text-xl font-medium text-gray-900">Production Ready</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Testing, linting, and deployment configuration included
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs font-medium">Jest Testing</Badge>
                <Badge variant="outline" className="text-xs font-medium">ESLint</Badge>
                <Badge variant="outline" className="text-xs font-medium">TypeScript</Badge>
                <Badge variant="outline" className="text-xs font-medium">CI/CD Ready</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Component Showcase */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-center mb-16 text-gray-900">
            Component Library
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form Components */}
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-lg font-medium text-gray-900">Form Components</CardTitle>
                <CardDescription className="text-gray-600">
                  Ready-to-use form elements with validation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium text-gray-700">Category</Label>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="question">Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0">
                  Submit Form
                </Button>
              </CardContent>
            </Card>

            {/* UI Components */}
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-lg font-medium text-gray-900">UI Components</CardTitle>
                <CardDescription className="text-gray-600">
                  Beautiful, accessible components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-gray-100 text-gray-600">CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">Developer</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Default</Badge>
                  <Badge variant="outline" className="text-xs">Secondary</Badge>
                  <Badge variant="outline" className="text-xs">Outline</Badge>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white border-0">Small</Button>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0">Default</Button>
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white border-0">Large</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h2 className="text-3xl font-light mb-12 text-gray-900">
            Built with Modern Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm font-medium px-4 py-2">
              Next.js 14
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-4 py-2">
              TypeScript
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-4 py-2">
              Tailwind CSS
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-4 py-2">
              shadcn/ui
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-4 py-2">
              Jest
            </Badge>
            <Badge variant="outline" className="text-sm font-medium px-4 py-2">
              ESLint
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
} 
