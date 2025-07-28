'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Form Submitted!',
      description: `Thank you ${formData.name}, your message has been received.`,
    });
    setFormData({ name: '', email: '', message: '', category: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-24">
          <Badge variant="outline" className="mb-6 text-xs font-medium tracking-wide uppercase">
            Component Demo
          </Badge>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            shadcn/ui
            <span className="font-normal text-gray-600"> Components</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Interactive showcase of all available components with real functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Interactive Form */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-lg font-medium text-gray-900">Interactive Form</CardTitle>
              <CardDescription className="text-gray-600">
                Try out the form components with real validation and toast notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your name"
                    className="border-gray-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    className="border-gray-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium text-gray-700">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="question">Question</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Enter your message"
                    rows={4}
                    className="border-gray-300"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0">
                  Submit Form
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Interactive Components */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-lg font-medium text-gray-900">Interactive Components</CardTitle>
              <CardDescription className="text-gray-600">
                Test out different component interactions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Dialog Demo */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Dialog Component</Label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                      Open Dialog
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="border-gray-200">
                    <DialogHeader>
                      <DialogTitle className="text-gray-900">Welcome to shadcn/ui!</DialogTitle>
                      <DialogDescription className="text-gray-600">
                        This is a beautiful, accessible dialog component. You can customize it with any content you need.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        shadcn/ui provides a collection of reusable components that you can copy and paste into your apps.
                      </p>
                      <div className="flex justify-end space-x-3">
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                          Cancel
                        </Button>
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0">
                          Continue
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Dropdown Menu Demo */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Dropdown Menu</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                      Open Menu
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border-gray-200">
                    <DropdownMenuLabel className="text-gray-900">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-gray-700">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700">Billing</DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700">Team</DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700">Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Toast Demo */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Toast Notifications</Label>
                <div className="flex gap-3">
                  <Button
                    onClick={() => toast({
                      title: 'Success!',
                      description: 'This is a success toast notification.',
                    })}
                    className="bg-gray-900 hover:bg-gray-800 text-white border-0"
                  >
                    Success Toast
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toast({
                      title: 'Error!',
                      description: 'This is an error toast notification.',
                      variant: 'destructive',
                    })}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Error Toast
                  </Button>
                </div>
              </div>

              {/* Avatar Demo */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Avatar Component</Label>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-gray-100 text-gray-600">CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gray-100 text-gray-600">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gray-100 text-gray-600">AB</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Badge Demo */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Badge Variants</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Default</Badge>
                  <Badge variant="outline" className="text-xs">Secondary</Badge>
                  <Badge variant="outline" className="text-xs">Outline</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-24">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
} 
