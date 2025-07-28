# Fullstack AI-Assisted Starter

A comprehensive boilerplate for creating AI-assisted fullstack applications with built-in AI development support.

## 🚀 Features

- **AI-Enhanced Development**: Pre-configured Cursor AI rules and context files
- **Fullstack Architecture**: Separate client and server directories with clear separation
- **Documentation-Driven**: Built-in PRD and task management
- **Prompt Engineering**: Organized prompt templates for system, tasks, and refactoring
- **Scalable Structure**: Designed for growth and team collaboration
- **Concurrent Development**: Run both backend and frontend with a single command
- **🔐 Comprehensive Security**: Built-in security measures and guidelines for AI-assisted development
- **🐛 Advanced Debugging**: Systematic debugging prompts and strategies
- **🧪 Comprehensive Testing**: Testing strategies and quality assurance prompts
- **✅ Quality Assurance**: Code quality and best practices guidance

## 📁 Project Structure

```
fullstack-ai-assisted-starter/
│
├── client/                           # Frontend application
│   ├── .cursor/
│   │   ├── rules.mdc                 # AI coding rules for frontend
│   │   └── context.mdc               # AI context for frontend
│   ├── .cursorignore                 # Ignore files from AI context
│   └── ...                           # Your frontend app
│
├── server/                           # Backend application
│   ├── .cursor/
│   │   ├── rules.mdc                 # AI coding rules for backend
│   │   └── context.mdc               # AI context for backend
│   ├── .cursorignore                 # Ignore files from AI context
│   ├── SECURITY.md                   # Backend security documentation
│   └── ...                           # Your backend
│
├── docs/                             # Project documentation
│   ├── prd.md                        # Product Requirements Document
│   └── tasks.md                      # Task management and tracking
│
├── prompts/                          # AI prompt templates
│   ├── system/                       # System-level prompts
│   │   ├── architecture.md           # Architecture guidelines
│   │   ├── security-prompts.md       # Security-focused AI prompts
│   │   ├── debugging-prompts.md      # Comprehensive debugging strategies
│   │   ├── testing-prompts.md        # Testing strategies and quality assurance
│   │   └── quality-assurance-prompts.md # Code quality and best practices
│   ├── tasks/                        # Task-specific prompts
│   └── refactor/                     # Refactoring prompts
│
├── SECURITY.md                       # Comprehensive security documentation
└── README.md                         # This file
```

## 🔐 Security

This project includes comprehensive security measures and guidelines:

- **Security Documentation**: Complete security checklist and implementation guide in `SECURITY.md`
- **AI Security Prompts**: Security-focused prompts for AI-assisted development in `prompts/system/security-prompts.md`
- **Backend Security**: Pre-configured security middleware, rate limiting, and authentication
- **Frontend Security**: Security headers, input validation, and CSRF protection
- **Security Testing**: Automated security tests and audit scripts

**⚠️ Important**: When using AI for code generation, always review the generated code for security vulnerabilities. See `SECURITY.md` for detailed guidelines.

## 🐛 Debugging & Testing

This project includes comprehensive debugging and testing support:

- **Debugging Strategies**: Systematic debugging approaches in `prompts/system/debugging-prompts.md`
- **Testing Frameworks**: Comprehensive testing strategies in `prompts/system/testing-prompts.md`
- **Quality Assurance**: Code quality and best practices in `prompts/system/quality-assurance-prompts.md`
- **Error Handling**: Pre-configured error handling and logging
- **Test Automation**: Automated testing setup and configuration

**💡 Tip**: Use the debugging and testing prompts to ensure robust, maintainable code when working with AI assistants.

## 🛠️ Getting Started

1. **Clone or download** this boilerplate
2. **Customize** the AI rules and context files in `.cursor/` directories
3. **Set up** your frontend and backend applications
4. **Configure** your development environment
5. **Review security documentation** in `SECURITY.md`
6. **Start building** with AI assistance!

## 🚀 Quick Start

### Concurrent Development (Recommended)

Run both backend and frontend simultaneously with a single command:

```bash
# Install all dependencies
npm run install:all

# Start both services concurrently
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000 (Next.js)
- **Backend**: http://localhost:3001 (Express API)

### Individual Services

You can also run services individually:

```bash
# Backend only
npm run dev:server

# Frontend only  
npm run dev:client
```

### Production Build

```bash
# Build both applications
npm run build

# Start both in production mode
npm run start
```

### Utility Commands
```bash
# Run linting for both projects
npm run lint

# Fix linting issues for both projects
npm run lint:fix

# Run tests for both projects
npm run test

# Type checking for both projects
npm run type-check

# Clean all node_modules and build files
npm run clean
```

### Ports
- **Backend**: Runs on `http://localhost:3001` (or as configured in server)
- **Frontend**: Runs on `http://localhost:3000` (Next.js default)

## 🤖 AI Configuration

### Cursor AI Rules
- `client/.cursor/rules.mdc`: Frontend-specific coding rules and patterns
- `server/.cursor/rules.mdc`: Backend-specific coding rules and patterns

### AI Context
- `client/.cursor/context.mdc`: Frontend architecture and conventions
- `server/.cursor/context.mdc`: Backend architecture and conventions

### Ignore Files
- `.cursorignore`: Configure which files to exclude from AI context

## 📚 Documentation

- **PRD**: Product Requirements Document in `docs/prd.md`
- **Tasks**: Task management and tracking in `docs/tasks.md`

## 🎯 Prompt Templates

Organized prompt templates for different development phases:
- **System**: High-level architecture and setup prompts
- **Tasks**: Feature development and implementation prompts
- **Refactor**: Code improvement and optimization prompts

## 🔧 Customization

1. **Update AI Rules**: Modify `.cursor/rules.mdc` files to match your coding standards
2. **Set Context**: Update `.cursor/context.mdc` files with your project's architecture
3. **Configure Ignores**: Edit `.cursorignore` files to exclude sensitive or unnecessary files
4. **Add Prompts**: Extend the prompt templates in the `prompts/` directory

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Happy coding with AI assistance! 🚀** 
