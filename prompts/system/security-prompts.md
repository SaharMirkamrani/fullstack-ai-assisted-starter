# 🔐 Security-Focused AI Prompts

This document contains security-focused prompts to use when working with AI coding assistants like Cursor. These prompts ensure that security considerations are always included in AI-generated code.

## 🚨 Critical Security Reminder

**⚠️ IMPORTANT**: AI focuses on functionality, not security. Always review AI-generated code for security vulnerabilities before implementing.

## 📝 Security Prompts by Category

### Authentication & Authorization

```bash
# User Registration
"Create a user registration endpoint with proper input validation, password hashing using bcrypt with 12 rounds, email verification, and protection against common security vulnerabilities like SQL injection and XSS."

# User Login
"Build a secure login endpoint with rate limiting (5 attempts per 15 minutes), proper password comparison using bcrypt, JWT token generation with secure settings, and protection against brute force attacks."

# Password Reset
"Implement a secure password reset flow with time-limited tokens (15 minutes), email verification, and protection against token enumeration attacks."

# Role-Based Access Control
"Create middleware for role-based authorization that checks user permissions before allowing access to protected routes. Include proper error handling and logging."
```

### Input Validation & Sanitization

```bash
# Form Validation
"Add comprehensive input validation to this form including email format validation, password strength requirements (8+ chars, uppercase, lowercase, number), and XSS protection."

# API Input Sanitization
"Implement input sanitization for this API endpoint to prevent XSS, SQL injection, and NoSQL injection attacks. Use express-validator and proper escaping."

# File Upload Security
"Create a secure file upload endpoint with file type validation, size limits (5MB), virus scanning, and protection against malicious file uploads."
```

### Rate Limiting & Abuse Prevention

```bash
# API Rate Limiting
"Add rate limiting to this API endpoint: 100 requests per 15 minutes for general endpoints, 5 requests per 15 minutes for authentication endpoints."

# Brute Force Protection
"Implement brute force protection for login attempts with account lockout after 5 failed attempts and progressive delays."

# Spam Protection
"Add spam protection to this contact form including honeypot fields, reCAPTCHA integration, and server-side validation."
```

### Data Protection

```bash
# Sensitive Data Handling
"Ensure this endpoint doesn't expose sensitive data in error messages, logs, or responses. Implement proper error handling and data masking."

# Database Security
"Implement row-level security for this database query to ensure users can only access their own data. Add proper user context validation."

# Encryption
"Add encryption for sensitive data at rest and in transit. Use proper key management and secure communication protocols."
```

### Security Headers & Configuration

```bash
# Security Headers
"Configure security headers including Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, and HSTS for this application."

# CORS Configuration
"Set up proper CORS configuration with specific allowed origins, credentials handling, and protection against unauthorized cross-origin requests."

# Cookie Security
"Configure secure cookies with HttpOnly, Secure, and SameSite attributes for session management and authentication tokens."
```

### Error Handling & Logging

```bash
# Secure Error Handling
"Implement secure error handling that doesn't expose sensitive information like database details, file paths, or internal system information."

# Security Logging
"Add security event logging for authentication attempts, authorization failures, and suspicious activities without logging sensitive data."

# Audit Trail
"Create an audit trail system to track user actions, data modifications, and security events for compliance and incident response."
```

## 🔍 Security Review Prompts

### Code Security Analysis

```bash
# Security Vulnerability Check
"Review this code for security vulnerabilities including XSS, CSRF, SQL injection, authentication bypass, and data exposure issues."

# Security Best Practices Review
"Check if this code follows security best practices including input validation, proper authentication, secure communication, and error handling."

# Dependency Security
"Review the dependencies in this project for known security vulnerabilities and suggest secure alternatives if needed."
```

### Penetration Testing Simulation

```bash
# Authentication Testing
"Simulate common authentication attacks on this login system including brute force, credential stuffing, and session hijacking attempts."

# Input Validation Testing
"Test this form for input validation bypasses including XSS payloads, SQL injection attempts, and file upload exploits."

# Authorization Testing
"Test this application for authorization bypasses including privilege escalation, horizontal privilege escalation, and access control failures."
```

## 🛡️ Spam Protection Prompts

### Honeypot Implementation

```bash
# Honeypot Field
"Add a honeypot field to this form that's hidden from users but visible to bots. Include server-side validation to reject submissions with filled honeypot fields."

# reCAPTCHA Integration
"Integrate Google reCAPTCHA v3 into this form with proper client-side and server-side validation. Handle verification failures gracefully."
```

### Rate Limiting for Forms

```bash
# Form Rate Limiting
"Implement rate limiting for this contact form: maximum 3 submissions per hour per IP address with proper error messages and logging."
```

## 🔧 Implementation Prompts

### Frontend Security

```bash
# React Security
"Create a secure React component for user input that includes proper validation, XSS protection, and CSRF token handling."

# Next.js Security
"Configure Next.js security headers and implement secure authentication flow with proper token management and session handling."

# Form Security
"Build a secure form component with client-side validation, CSRF protection, and proper error handling without exposing sensitive information."
```

### Backend Security

```bash
# Express Security
"Set up a secure Express.js application with Helmet.js, CORS configuration, rate limiting, and proper error handling."

# Database Security
"Implement secure database operations with parameterized queries, input validation, and proper user context validation."

# API Security
"Create a secure REST API with proper authentication, authorization, input validation, and rate limiting for all endpoints."
```

## 📋 Security Checklist Prompts

### Pre-Deployment Security Check

```bash
# Security Audit
"Run a comprehensive security audit on this codebase including dependency vulnerabilities, code security issues, and configuration problems."

# Production Security
"Review this application for production security readiness including environment variables, HTTPS configuration, and security headers."

# Compliance Check
"Verify this application meets security compliance requirements including data protection, authentication standards, and audit logging."
```

## 🚨 Emergency Security Prompts

### Incident Response

```bash
# Security Incident
"Help me respond to a security incident. What immediate steps should I take to contain the threat and protect user data?"

# Vulnerability Assessment
"Assess the severity of this security vulnerability and provide immediate mitigation steps and long-term fixes."

# Data Breach Response
"Guide me through the response to a potential data breach including notification requirements, containment steps, and recovery procedures."
```

## 📚 Security Education Prompts

### Learning Security

```bash
# Security Concepts
"Explain the security concept of [XSS/CSRF/SQL Injection/etc.] and show me how to implement protection against it."

# Security Tools
"Recommend security tools and libraries for [authentication/validation/encryption/etc.] with examples of proper implementation."

# Security Standards
"Explain the OWASP Top 10 vulnerabilities and how to implement protection against each one in a web application."
```

## ⚠️ Important Reminders

### Before Using AI-Generated Code

1. **Always review for security vulnerabilities**
2. **Test authentication and authorization**
3. **Validate input handling**
4. **Check for exposed secrets**
5. **Verify error handling**
6. **Test rate limiting**
7. **Review dependency security**
8. **Check for proper logging**

### Security-First Development

```bash
# Security-First Approach
"When implementing any feature, always consider security implications first. Include authentication, authorization, input validation, and proper error handling in your implementation."
```

---

## 📝 Usage Instructions

1. **Copy the relevant prompt** for your specific use case
2. **Customize the prompt** with your specific requirements
3. **Review the AI-generated code** for security issues
4. **Test the implementation** thoroughly
5. **Document security measures** implemented

## 🔄 Regular Security Reviews

- **Daily**: Review AI-generated code for security issues
- **Weekly**: Run security audits and dependency checks
- **Monthly**: Conduct comprehensive security reviews
- **Quarterly**: Perform penetration testing and security assessments

---

**Remember**: Security is not a one-time task but an ongoing process. Always prioritize security over convenience when working with AI-generated code. 
