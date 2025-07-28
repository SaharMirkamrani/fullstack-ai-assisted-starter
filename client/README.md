# Fullstack AI-Assisted Client

A modern Next.js 14 frontend application with TypeScript, Tailwind CSS, shadcn/ui components, and comprehensive AI development support. Features a clean, minimal, monochromatic design.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local

# Start development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Toaster
│   ├── page.tsx           # Home page
│   ├── demo/page.tsx      # Component demo page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── hooks/                # Custom React hooks (use-toast)
├── utils/                # Helper functions
├── styles/               # Additional styles
├── constants/            # Application constants
└── __tests__/            # Test files
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run e2e` - Run end-to-end tests

## 🎨 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (comprehensive component library)
- **Design**: Minimal, monochromatic, modern aesthetic
- **Testing**: Jest + React Testing Library + Playwright
- **Linting**: ESLint + Prettier
- **State Management**: Zustand (ready to use)
- **Data Fetching**: React Query (ready to use)
- **Authentication**: NextAuth.js (ready to use)

## 🎨 Design System

This project features a **minimal, monochromatic design** with:

### Color Palette
- **Primary**: Gray scale (gray-900, gray-800, gray-700, gray-600, gray-500, gray-400, gray-300, gray-200, gray-100, gray-50)
- **Background**: Pure white (#FFFFFF)
- **Text**: Gray-900 for headings, Gray-600 for body text
- **Borders**: Gray-200 for subtle separation
- **Shadows**: Minimal shadow-sm for depth

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: Light (300) for headings, Normal (400) for body text, Medium (500) for labels
- **Sizes**: Large, readable text with proper hierarchy

### Components
- **Cards**: Clean borders with minimal shadows
- **Buttons**: High contrast with smooth transitions
- **Forms**: Subtle borders with focus states
- **Spacing**: Generous whitespace for breathing room

## 🎨 shadcn/ui Components

This project includes a comprehensive set of shadcn/ui components:

### Form Components
- **Button** - Multiple variants and sizes
- **Input** - Text input with validation
- **Label** - Accessible form labels
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection
- **Form** - Form validation with React Hook Form

### UI Components
- **Card** - Content containers
- **Badge** - Status indicators
- **Avatar** - User profile images
- **Dialog** - Modal dialogs
- **Dropdown Menu** - Context menus
- **Toast** - Notification system

### Available Commands
```bash
# Add new shadcn/ui components
npx shadcn@latest add [component-name]

# View all available components
npx shadcn@latest add --help
```

## 🎯 Demo Pages

- **Home Page** (`/`) - Landing page with feature showcase
- **Component Demo** (`/demo`) - Interactive component showcase with real functionality

## 🤖 AI Development Support

This project includes pre-configured AI development tools:

- **Cursor AI Rules**: Located in `.cursor/rules.mdc`
- **AI Context**: Located in `.cursor/context.mdc`
- **Prompt Templates**: Located in `../prompts/`

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration
- `jest.config.ts` - Jest testing configuration
- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration

## 📱 Features

- ✅ Modern Next.js 14 setup
- ✅ TypeScript with strict mode
- ✅ Tailwind CSS with custom design system
- ✅ shadcn/ui component library
- ✅ Minimal, monochromatic design
- ✅ Responsive design
- ✅ Dark mode support (ready)
- ✅ Comprehensive testing setup
- ✅ Code quality tools
- ✅ AI development support
- ✅ Performance optimized
- ✅ SEO ready
- ✅ Accessibility features

## 🚀 Next Steps

1. **Explore Components**: Visit `/demo` to see all available components
2. **Customize**: Modify the design system in `tailwind.config.ts`
3. **Add Components**: Use `npx shadcn@latest add [component]` to add new components
4. **Set Up Backend**: Configure the Express.js backend in `../server/`
5. **Add Authentication**: Set up NextAuth.js for user authentication
6. **Deploy**: Deploy to Vercel or your preferred platform

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## 🤝 Contributing

1. Follow the established code patterns
2. Write tests for new features
3. Ensure TypeScript compilation passes
4. Run linting before committing
5. Use the AI development tools for assistance
6. Use shadcn/ui components for consistency
7. Maintain the minimal, monochromatic design aesthetic

---

**Happy coding! 🎉** 
