# 🔐 Comprehensive Security Documentation

This document provides a complete security checklist and guidelines for the Fullstack AI-Assisted Starter project, covering both frontend and backend security measures.

## 📋 Security Checklist

### Frontend Security

| Status | Security Measure | Description | Implementation |
|--------|------------------|-------------|----------------|
| ✅ | Use HTTPS everywhere | Prevents basic eavesdropping and man-in-the-middle attacks | Configured in Next.js headers |
| ✅ | Input validation and sanitization | Prevents XSS attacks by validating all user inputs | Implemented in utils.ts with validation functions |
| ✅ | Don't store sensitive data in browser | No secrets in localStorage or client-side code | Environment variables properly configured |
| ⚠️ | CSRF protection | Implement anti-CSRF tokens for forms and state-changing requests | **NEEDS IMPLEMENTATION** |
| ✅ | Never expose API keys in frontend | API credentials should always remain server-side | Using NEXT_PUBLIC_ prefix only for safe variables |

### Backend Security

| Status | Security Measure | Description | Implementation |
|--------|------------------|-------------|----------------|
| ✅ | Authentication fundamentals | Use established libraries, proper password storage (hashing+salting) | bcryptjs with 12 rounds configured |
| ⚠️ | Authorization checks | Always verify permissions before performing actions | **NEEDS IMPLEMENTATION** |
| ✅ | API endpoint protection | Implement proper authentication for every API endpoint | JWT authentication configured |
| ✅ | SQL injection prevention | Use parameterized queries or ORMs, never raw SQL with user input | MongoDB with mongoose, input sanitization |
| ✅ | Basic security headers | Implement X-Frame-Options, X-Content-Type-Options, and HSTS | Helmet.js configured |
| ✅ | DDoS protection | Use a CDN or cloud service with built-in DDoS mitigation capabilities | Rate limiting and slow down protection |

### Practical Security Habits

| Status | Security Measure | Description | Implementation |
|--------|------------------|-------------|----------------|
| ✅ | Keep dependencies updated | Most vulnerabilities come from outdated libraries | npm audit script configured |
| ✅ | Proper error handling | Don't expose sensitive details in error messages | Custom error handler implemented |
| ✅ | Secure cookies | Set HttpOnly, Secure and SameSite attributes | JWT tokens configured properly |
| ✅ | File upload security | Validate file types, sizes, and scan for malicious content | Multer with validation configured |
| ✅ | Rate limiting | Implement on all API endpoints, especially authentication-related ones | express-rate-limit configured |

## 🚨 Critical Security Measures for AI-Assisted Development

### When Using AI for Code Generation

**⚠️ IMPORTANT: AI focuses on functionality, not security. Always review AI-generated code for security vulnerabilities.**

#### Security Prompts for AI

When asking AI to generate code, always include security requirements:

```bash
# Example security-focused prompts:
"Build a login endpoint in Express, but make sure to validate inputs, hash passwords using bcrypt, and avoid common security issues."

"Make sure this endpoint is protected against SQL injection and does not expose sensitive data."

"Review this code and improve its security. What vulnerabilities do you see?"

"Add basic rate limiting to prevent abuse."

"Enable row-level security on sensitive tables like 'users' or 'posts', and create policies to restrict access based on user_id."

"Add basic spam protection like rate limiting, honeypot field, and server-side validation to this feedback endpoint."
```

#### Common AI-Generated Security Issues

1. **Exposed API Keys**: AI might hardcode secrets
2. **Missing Input Validation**: AI focuses on functionality over security
3. **No Authentication**: AI might skip auth for simplicity
4. **Weak Password Storage**: AI might use plain text or weak hashing
5. **Missing Rate Limiting**: AI rarely includes abuse prevention
6. **No CSRF Protection**: AI often forgets cross-site request forgery protection
7. **Insecure File Uploads**: AI might skip file validation
8. **Exposed Error Messages**: AI might leak sensitive information in errors

## 🔧 Security Implementation Guide

### Frontend Security Implementation

#### 1. Content Security Policy (CSP)

```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
      ],
    },
  ];
}
```

#### 2. Input Validation

```typescript
// client/src/lib/validation.ts
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
```

#### 3. CSRF Protection

```typescript
// client/src/lib/csrf.ts
export const getCSRFToken = async (): Promise<string> => {
  const response = await fetch('/api/csrf-token', {
    credentials: 'include',
  });
  const data = await response.json();
  return data.csrfToken;
};

export const includeCSRFToken = (headers: HeadersInit = {}): HeadersInit => {
  return {
    ...headers,
    'X-CSRF-Token': getCSRFToken(),
  };
};
```

#### 4. Secure API Client

```typescript
// client/src/lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true,
});

// Request interceptor for CSRF tokens
api.interceptors.request.use(async (config) => {
  if (config.method !== 'get') {
    const csrfToken = await getCSRFToken();
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

### Backend Security Implementation

#### 1. Authentication Middleware

```typescript
// server/src/middleware/auth.ts
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { config } from '../config/config';

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, config.jwt.secret, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }
    next();
  };
};
```

#### 2. Input Validation Middleware

```typescript
// server/src/middleware/validation.ts
import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateLogin = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateRegistration = [
  body('name').trim().isLength({ min: 2 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('password')
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain uppercase, lowercase, and number'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
```

#### 3. Rate Limiting Configuration

```typescript
// server/src/config/rateLimit.ts
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: {
    error: 'Too many login attempts, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 50, // Allow 50 requests per 15 minutes without delay
  delayMs: 500, // Add 500ms delay per request after delayAfter
});
```

#### 4. File Upload Security

```typescript
// server/src/middleware/fileUpload.ts
import multer from 'multer';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and PDF files are allowed.'));
  }
};

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: fileFilter,
});
```

## 🛡️ Spam Protection Implementation

### 1. Honeypot Field

```typescript
// Frontend honeypot field
const HoneypotField = () => (
  <div style={{ display: 'none' }}>
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
    />
  </div>
);

// Backend honeypot validation
export const validateHoneypot = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.website) {
    return res.status(400).json({ message: 'Form submission blocked' });
  }
  next();
};
```

### 2. reCAPTCHA Integration

```typescript
// Frontend reCAPTCHA
import ReCAPTCHA from 'react-google-recaptcha';

const LoginForm = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (data: LoginData) => {
    if (!captchaToken) {
      setError('Please complete the reCAPTCHA');
      return;
    }
    
    await login({ ...data, captchaToken });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={setCaptchaToken}
      />
    </form>
  );
};

// Backend reCAPTCHA validation
export const validateRecaptcha = async (req: Request, res: Response, next: NextFunction) => {
  const { captchaToken } = req.body;
  
  if (!captchaToken) {
    return res.status(400).json({ message: 'reCAPTCHA verification required' });
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    });

    const data = await response.json();
    
    if (!data.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }
    
    next();
  } catch (error) {
    return res.status(500).json({ message: 'reCAPTCHA verification error' });
  }
};
```

## 🔍 Security Testing

### 1. Automated Security Tests

```typescript
// server/src/__tests__/security.test.ts
import request from 'supertest';
import { app } from '../app';

describe('Security Tests', () => {
  test('should have security headers', async () => {
    const response = await request(app).get('/');
    
    expect(response.headers).toHaveProperty('x-frame-options');
    expect(response.headers['x-frame-options']).toBe('DENY');
    expect(response.headers).toHaveProperty('x-content-type-options');
    expect(response.headers['x-content-type-options']).toBe('nosniff');
  });

  test('should prevent SQL injection', async () => {
    const maliciousInput = "'; DROP TABLE users; --";
    
    const response = await request(app)
      .post('/api/login')
      .send({ email: maliciousInput, password: 'password' });
    
    expect(response.status).not.toBe(500);
  });

  test('should rate limit requests', async () => {
    const requests = Array(6).fill(null).map(() =>
      request(app).post('/api/login').send({ email: 'test@test.com', password: 'password' })
    );
    
    const responses = await Promise.all(requests);
    const tooManyRequests = responses.filter(r => r.status === 429);
    
    expect(tooManyRequests.length).toBeGreaterThan(0);
  });
});
```

### 2. Security Audit Script

```bash
#!/bin/bash
# scripts/security-audit.sh

echo "🔍 Running Security Audit..."

# Check for vulnerable dependencies
echo "📦 Checking dependencies..."
npm audit

# Check for exposed secrets
echo "🔐 Checking for exposed secrets..."
grep -r "password\|secret\|key\|token" . --exclude-dir=node_modules --exclude-dir=.git

# Check for security headers
echo "🛡️ Checking security headers..."
curl -I http://localhost:3001 | grep -E "(X-Frame-Options|X-Content-Type-Options|Strict-Transport-Security)"

# Run security tests
echo "🧪 Running security tests..."
npm run test:security

echo "✅ Security audit complete!"
```

## 📚 Security Resources

### Tools
- [OWASP ZAP](https://owasp.org/www-project-zap/) - Security testing
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Dependency scanning
- [Helmet.js](https://helmetjs.github.io/) - Security headers
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit) - Rate limiting

### Documentation
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Express.js Security](https://expressjs.com/en/advanced/best-practices-security.html)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)

### Standards
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [ISO 27001](https://www.iso.org/isoiec-27001-information-security.html)

## ⚠️ Security Warnings

### Never Do This
- ❌ Store passwords in plain text
- ❌ Use weak JWT secrets
- ❌ Expose sensitive data in error messages
- ❌ Skip input validation
- ❌ Use default credentials
- ❌ Disable security headers
- ❌ Log sensitive information
- ❌ Use HTTP in production
- ❌ Trust AI-generated code without security review

### Always Do This
- ✅ Use HTTPS in production
- ✅ Validate all inputs
- ✅ Hash passwords with bcrypt
- ✅ Use strong, unique secrets
- ✅ Implement rate limiting
- ✅ Monitor security logs
- ✅ Keep dependencies updated
- ✅ Follow security best practices
- ✅ Review AI-generated code for security vulnerabilities

## 🔄 Regular Security Tasks

### Daily
- [ ] Monitor security logs
- [ ] Check for failed login attempts
- [ ] Review system alerts

### Weekly
- [ ] Update dependencies
- [ ] Review access logs
- [ ] Check security metrics
- [ ] Run security tests

### Monthly
- [ ] Security audit
- [ ] Vulnerability assessment
- [ ] Access review
- [ ] Backup verification
- [ ] Review AI-generated code for security issues

### Quarterly
- [ ] Penetration testing
- [ ] Security training
- [ ] Incident response drill
- [ ] Policy review

---

**Last Updated**: [Current Date]
**Version**: 1.0.0

> **Remember**: Security is not a one-time task but an ongoing process. Always review AI-generated code for security vulnerabilities and never trust code that "just works" without security considerations. 
