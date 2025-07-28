# 🐛 Comprehensive Debugging Prompts

This document contains debugging-focused prompts to use when working with AI coding assistants like Cursor. These prompts help identify, diagnose, and resolve issues efficiently.

## 🚨 Critical Debugging Reminder

**⚠️ IMPORTANT**: Always start with systematic debugging approaches. Don't jump to conclusions - gather evidence first.

## 📝 Debugging Prompts by Category

### General Debugging Approach

```bash
# Systematic Debugging
"Help me debug this issue systematically. What steps should I take to identify the root cause? Start with the most likely causes and work through them methodically."

# Error Analysis
"Analyze this error message and explain what it means, what likely caused it, and how to fix it: [paste error here]"

# Performance Debugging
"This application is running slowly. Help me identify performance bottlenecks and suggest optimization strategies."

# Memory Leak Detection
"I suspect there's a memory leak in this application. Help me identify potential causes and create a debugging strategy."
```

### Frontend Debugging

```bash
# React Component Issues
"This React component isn't rendering correctly. Help me debug the issue by checking for common problems like state management, props, and lifecycle issues."

# State Management Debugging
"My application state isn't updating as expected. Help me trace through the state management flow and identify where the issue might be."

# API Integration Issues
"The frontend isn't receiving data from the API. Help me debug the API integration by checking request/response handling, error states, and network issues."

# UI/UX Issues
"The UI isn't displaying correctly on different screen sizes. Help me debug responsive design issues and cross-browser compatibility problems."

# Form Validation Issues
"This form validation isn't working properly. Help me debug the validation logic and error handling."

# Authentication Flow Issues
"The authentication flow isn't working correctly. Help me debug the login/logout process, token management, and session handling."
```

### Backend Debugging

```bash
# API Endpoint Issues
"This API endpoint is returning errors. Help me debug the request handling, validation, and response generation."

# Database Query Issues
"My database queries aren't returning the expected results. Help me debug the query logic, connection issues, and data retrieval problems."

# Authentication/Authorization Issues
"The authentication middleware isn't working correctly. Help me debug the token validation, user verification, and permission checking."

# File Upload Issues
"File uploads aren't working properly. Help me debug the file handling, validation, and storage issues."

# Email/SMS Issues
"Email/SMS notifications aren't being sent. Help me debug the email service integration, template rendering, and delivery issues."

# Background Job Issues
"Background jobs aren't processing correctly. Help me debug the job queue, processing logic, and error handling."
```

### Database Debugging

```bash
# Query Performance
"This database query is running slowly. Help me analyze the query plan and suggest optimization strategies."

# Data Integrity Issues
"The data in my database seems inconsistent. Help me debug data integrity issues and identify potential causes."

# Connection Issues
"I'm experiencing database connection problems. Help me debug connection pooling, timeout issues, and network connectivity."

# Migration Issues
"Database migrations aren't working correctly. Help me debug the migration process and identify potential conflicts."
```

### Network & API Debugging

```bash
# CORS Issues
"I'm getting CORS errors when making API requests. Help me debug the CORS configuration and identify the root cause."

# HTTP Status Code Issues
"The API is returning unexpected HTTP status codes. Help me debug the status code logic and error handling."

# Request/Response Issues
"API requests aren't being processed correctly. Help me debug the request parsing, validation, and response generation."

# WebSocket Issues
"WebSocket connections aren't working properly. Help me debug the connection establishment, message handling, and disconnection issues."
```

### Testing & Quality Assurance

```bash
# Test Failure Debugging
"This test is failing consistently. Help me debug the test logic, setup, and identify why it's not passing."

# Integration Test Issues
"Integration tests are failing intermittently. Help me debug the test environment, data setup, and timing issues."

# Performance Test Issues
"Performance tests are showing unexpected results. Help me debug the test configuration, metrics collection, and analysis."

# End-to-End Test Issues
"End-to-end tests are failing on different environments. Help me debug environment-specific issues and test stability."
```

## 🔍 Advanced Debugging Techniques

### Logging & Monitoring

```bash
# Log Analysis
"Help me analyze these application logs to identify patterns, errors, and potential issues: [paste logs here]"

# Structured Logging
"Help me implement structured logging for better debugging. Include relevant context, error codes, and traceability."

# Performance Monitoring
"Help me set up performance monitoring to identify bottlenecks and track application health."

# Error Tracking
"Help me implement comprehensive error tracking to capture and analyze application errors."
```

### Debugging Tools & Techniques

```bash
# Debugger Configuration
"Help me configure debugging tools for this application (VS Code, Chrome DevTools, etc.) with proper breakpoints and watch expressions."

# Memory Profiling
"Help me set up memory profiling to identify memory leaks and optimization opportunities."

# Network Debugging
"Help me debug network issues using tools like browser dev tools, Postman, or curl commands."

# Database Debugging
"Help me set up database debugging tools and queries to analyze performance and data issues."
```

### Production Debugging

```bash
# Production Issue Investigation
"We're experiencing issues in production. Help me create a systematic approach to investigate and resolve the problem without affecting users."

# Rollback Strategy
"A recent deployment is causing issues. Help me create a rollback strategy and identify what went wrong."

# Performance Degradation
"Application performance has degraded in production. Help me identify the cause and implement fixes."

# Security Issue Investigation
"We suspect a security issue. Help me investigate potential vulnerabilities and implement fixes."
```

## 🛠️ Debugging Implementation Prompts

### Frontend Debugging Setup

```bash
# React DevTools Configuration
"Help me configure React DevTools for optimal debugging experience with component inspection and state tracking."

# Redux DevTools Setup
"Help me set up Redux DevTools for debugging state management and action tracking."

# Error Boundary Implementation
"Help me implement error boundaries to catch and handle React component errors gracefully."

# Debug Logging
"Help me implement debug logging for frontend components with proper log levels and context."
```

### Backend Debugging Setup

```bash
# Debug Middleware
"Help me implement debug middleware for Express.js to log requests, responses, and errors."

# Database Debugging
"Help me set up database debugging with query logging, performance monitoring, and error tracking."

# API Debugging
"Help me implement comprehensive API debugging with request/response logging and error handling."

# Performance Monitoring
"Help me set up performance monitoring for the backend with metrics collection and analysis."
```

### Testing Debugging

```bash
# Test Debugging Setup
"Help me set up debugging tools for automated tests with proper logging and error reporting."

# Test Data Management
"Help me implement proper test data management for consistent and reliable test execution."

# Test Environment Debugging
"Help me debug test environment issues and ensure consistent test execution across different environments."
```

## 📊 Debugging Analysis Prompts

### Root Cause Analysis

```bash
# Issue Investigation
"Help me conduct a root cause analysis for this issue. What questions should I ask to identify the underlying problem?"

# Impact Assessment
"Help me assess the impact of this bug on users, data, and system performance."

# Fix Prioritization
"Help me prioritize these bugs based on severity, impact, and complexity of fixes."
```

### Performance Analysis

```bash
# Performance Profiling
"Help me analyze the performance characteristics of this code and identify optimization opportunities."

# Bottleneck Identification
"Help me identify performance bottlenecks in this application and suggest optimization strategies."

# Resource Usage Analysis
"Help me analyze resource usage patterns and identify potential optimization opportunities."
```

## 🔧 Debugging Tools & Commands

### Common Debugging Commands

```bash
# Node.js Debugging
"Help me debug this Node.js application using console.log, debugger statements, and Node.js debugging tools."

# Browser Debugging
"Help me debug this frontend application using browser developer tools, console logging, and network analysis."

# Database Debugging
"Help me debug database issues using query analysis, connection monitoring, and performance profiling."

# Network Debugging
"Help me debug network issues using curl, Postman, and network analysis tools."
```

### Debugging Scripts

```bash
# Debug Script Creation
"Help me create debugging scripts to automate common debugging tasks and data collection."

# Log Analysis Scripts
"Help me create scripts to analyze application logs and identify patterns and issues."

# Performance Testing Scripts
"Help me create scripts to test application performance and identify bottlenecks."
```

## 🚨 Emergency Debugging

### Critical Issue Response

```bash
# Production Outage
"We have a production outage. Help me create an emergency response plan to identify and resolve the issue quickly."

# Data Loss Investigation
"We suspect data loss or corruption. Help me investigate the issue and implement recovery procedures."

# Security Breach Investigation
"We suspect a security breach. Help me investigate the incident and implement containment measures."
```

### Quick Fix Strategies

```bash
# Hot Fix Implementation
"Help me implement a quick fix for this critical issue while planning a proper long-term solution."

# Rollback Procedures
"Help me create rollback procedures to quickly revert problematic changes."

# Emergency Patches
"Help me create emergency patches for critical security or functionality issues."
```

## 📚 Debugging Education

### Learning Debugging Techniques

```bash
# Debugging Methodology
"Teach me systematic debugging approaches and best practices for different types of issues."

# Tool Usage
"Help me learn how to use debugging tools effectively for different programming languages and frameworks."

# Problem-Solving Strategies
"Help me develop problem-solving strategies for complex debugging scenarios."
```

### Debugging Best Practices

```bash
# Code Review for Debugging
"Help me review this code for potential debugging issues and suggest improvements."

# Documentation for Debugging
"Help me create documentation that will make debugging easier for future developers."

# Debugging Workflow
"Help me establish a systematic debugging workflow for my development team."
```

## ⚠️ Important Debugging Reminders

### Before Starting Debugging

1. **Reproduce the issue consistently**
2. **Gather all relevant information**
3. **Check recent changes**
4. **Review error logs and messages**
5. **Test in different environments**
6. **Document your debugging process**

### During Debugging

1. **Make one change at a time**
2. **Test each change thoroughly**
3. **Keep detailed notes**
4. **Use version control for changes**
5. **Communicate with team members**
6. **Consider the impact of fixes**

### After Debugging

1. **Document the root cause**
2. **Implement proper fixes**
3. **Add tests to prevent regression**
4. **Update documentation**
5. **Share lessons learned**
6. **Monitor for similar issues**

---

## 📝 Usage Instructions

1. **Copy the relevant prompt** for your specific debugging scenario
2. **Customize the prompt** with your specific issue details
3. **Follow the systematic approach** suggested by the AI
4. **Document your debugging process** for future reference
5. **Implement fixes** and test thoroughly
6. **Share solutions** with your team

## 🔄 Regular Debugging Practices

- **Daily**: Review error logs and performance metrics
- **Weekly**: Conduct debugging sessions for recurring issues
- **Monthly**: Review debugging processes and tools
- **Quarterly**: Update debugging documentation and procedures

---

**Remember**: Good debugging is systematic, thorough, and well-documented. Always approach debugging methodically and don't rush to conclusions. 
