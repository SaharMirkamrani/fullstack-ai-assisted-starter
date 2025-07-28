# Fullstack AI-Assisted Starter - Backend Server

A production-ready Node.js backend server built with Express, TypeScript, and MongoDB, featuring comprehensive security, authentication, and best practices.

## 🚀 Features

- **TypeScript** - Full TypeScript support with strict type checking
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT Authentication** - Secure token-based authentication
- **Role-based Access Control** - User roles and permissions
- **Email Service** - Nodemailer with HTML templates
- **Security Middleware** - Helmet, CORS, rate limiting, XSS protection
- **Input Validation** - Express-validator with custom validators
- **Error Handling** - Comprehensive error handling and logging
- **API Documentation** - Swagger/OpenAPI documentation
- **Testing** - Jest with TypeScript support
- **Code Quality** - ESLint, Prettier, and Husky
- **Health Checks** - Kubernetes-ready health endpoints
- **File Upload** - Multer with validation and processing
- **Logging** - Winston logger with file and console output

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB 5+
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack-ai-assisted-starter/server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   # Server Configuration
   NODE_ENV=development
   PORT=5000
   
   # MongoDB Configuration
   MONGODB_URI=mongodb://localhost:27017/fullstack-ai-starter
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-this-in-production
   
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Start MongoDB**
   ```bash
   # Using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   
   # Or install MongoDB locally
   ```

## 🚀 Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Code Quality
```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run type-check
```

## 📚 API Documentation

Once the server is running, you can access the API documentation at:
- **Swagger UI**: `http://localhost:5000/api-docs`
- **Health Check**: `http://localhost:5000/health`

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/refresh` | Refresh access token |
| POST | `/api/auth/verify-email` | Verify email address |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset password |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/auth/logout` | Logout user |

### User Management Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/users` | Get all users | Admin |
| GET | `/api/users/:id` | Get user by ID | Private |
| PUT | `/api/users/:id` | Update user | Admin |
| DELETE | `/api/users/:id` | Delete user | Admin |
| PUT | `/api/users/profile` | Update profile | Private |
| POST | `/api/users/change-password` | Change password | Private |
| POST | `/api/users/avatar` | Upload avatar | Private |

### Health Check Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Basic health check |
| GET | `/api/health` | API health check |
| GET | `/api/health/detailed` | Detailed health check |
| GET | `/api/health/ready` | Readiness probe |
| GET | `/api/health/live` | Liveness probe |

## 🔐 Security Features

### Authentication & Authorization
- JWT-based authentication with refresh tokens
- Role-based access control (user, admin, moderator)
- Password hashing with bcrypt
- Account lockout after failed login attempts
- Email verification system

### Security Middleware
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Request rate limiting
- **XSS Protection** - Cross-site scripting protection
- **NoSQL Injection Protection** - MongoDB query sanitization
- **Parameter Pollution Protection** - HTTP parameter pollution prevention

### Input Validation
- Request body validation with express-validator
- Custom validation functions
- Sanitization of user inputs
- File upload validation

## 🗄️ Database

### MongoDB Connection
- Connection pooling
- Automatic reconnection
- Graceful shutdown
- Connection status monitoring

### User Model Features
- Email verification tokens
- Password reset tokens
- Login attempt tracking
- Account lockout mechanism
- User preferences
- Avatar support

## 📧 Email Service

### Features
- HTML email templates
- Email verification
- Password reset emails
- Welcome emails
- Configurable SMTP settings

### Templates
- Email verification
- Password reset
- Welcome email

## 🧪 Testing

### Test Structure
```
src/
├── __tests__/
│   ├── setup.ts
│   ├── auth.test.ts
│   ├── user.test.ts
│   └── health.test.ts
```

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test -- auth.test.ts

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📊 Monitoring & Logging

### Winston Logger
- Multiple log levels (error, warn, info, debug)
- File and console output
- JSON formatting for production
- Error stack traces

### Health Checks
- Basic health check
- Detailed service status
- Database connectivity
- Email service status
- System resource monitoring

## 🚀 Deployment

### Environment Variables
Make sure to set all required environment variables in production:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-production-jwt-secret
JWT_REFRESH_SECRET=your-production-refresh-secret
SMTP_HOST=your-smtp-host
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
```

### Docker Deployment
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY dist ./dist

EXPOSE 5000

CMD ["node", "dist/index.js"]
```

### Kubernetes
The server includes health check endpoints for Kubernetes:
- `/api/health/ready` - Readiness probe
- `/api/health/live` - Liveness probe

## 🔧 Configuration

### Environment Variables
See `env.example` for all available configuration options.

### Feature Flags
- `ENABLE_SWAGGER` - Enable/disable API documentation
- `ENABLE_RATE_LIMITING` - Enable/disable rate limiting
- `ENABLE_COMPRESSION` - Enable/disable response compression
- `ENABLE_LOGGING` - Enable/disable request logging

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with nodemon |
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Run TypeScript type checking |
| `npm run security-check` | Run npm audit |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the API documentation at `/api-docs`
- Review the health check endpoints for system status 
