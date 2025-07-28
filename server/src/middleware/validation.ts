import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ValidationError } from './errorHandler';

// Middleware to validate request
export const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => ({
      field: error.path,
      message: error.msg,
      value: error.value,
    }));

    throw new ValidationError(`Validation failed: ${errorMessages.map(e => e.message).join(', ')}`);
  }

  next();
};

// Custom validation for ObjectId
export const isValidObjectId = (value: string): boolean => {
  const objectIdPattern = /^[0-9a-fA-F]{24}$/;
  return objectIdPattern.test(value);
};

// Custom validation for password strength
export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

// Custom validation for phone number
export const isValidPhoneNumber = (phone: string): boolean => {
  // Basic phone number validation (can be customized based on requirements)
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Custom validation for URL
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Custom validation for date
export const isValidDate = (date: string): boolean => {
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj.getTime());
};

// Custom validation for future date
export const isFutureDate = (date: string): boolean => {
  const dateObj = new Date(date);
  const now = new Date();
  return dateObj > now;
};

// Custom validation for past date
export const isPastDate = (date: string): boolean => {
  const dateObj = new Date(date);
  const now = new Date();
  return dateObj < now;
};

// Custom validation for file size (in bytes)
export const isValidFileSize = (file: Express.Multer.File, maxSize: number): boolean => {
  return file.size <= maxSize;
};

// Custom validation for file type
export const isValidFileType = (file: Express.Multer.File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.mimetype);
};

// Sanitize input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .trim();
};

// Sanitize email
export const sanitizeEmail = (email: string): string => {
  return email.toLowerCase().trim();
};

// Sanitize phone number
export const sanitizePhone = (phone: string): string => {
  return phone.replace(/[\s\-\(\)]/g, '');
};

// Common validation chains
export const commonValidations = {
  // ObjectId validation
  objectId: (field: string) => ({
    custom: {
      options: (value: string) => {
        if (!isValidObjectId(value)) {
          throw new Error(`${field} must be a valid ObjectId`);
        }
        return true;
      },
    },
  }),

  // Email validation
  email: {
    isEmail: {
      errorMessage: 'Please provide a valid email address',
    },
    normalizeEmail: true,
  },

  // Password validation
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: 'Password must be at least 8 characters long',
    },
    matches: {
      options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      errorMessage: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    },
  },

  // Name validation
  name: {
    isLength: {
      options: { min: 1, max: 50 },
      errorMessage: 'Name must be between 1 and 50 characters',
    },
    trim: true,
  },

  // Phone validation
  phone: {
    custom: {
      options: (value: string) => {
        if (!isValidPhoneNumber(value)) {
          throw new Error('Please provide a valid phone number');
        }
        return true;
      },
    },
  },

  // URL validation
  url: {
    custom: {
      options: (value: string) => {
        if (!isValidUrl(value)) {
          throw new Error('Please provide a valid URL');
        }
        return true;
      },
    },
  },

  // Date validation
  date: {
    custom: {
      options: (value: string) => {
        if (!isValidDate(value)) {
          throw new Error('Please provide a valid date');
        }
        return true;
      },
    },
  },

  // Future date validation
  futureDate: {
    custom: {
      options: (value: string) => {
        if (!isValidDate(value)) {
          throw new Error('Please provide a valid date');
        }
        if (!isFutureDate(value)) {
          throw new Error('Date must be in the future');
        }
        return true;
      },
    },
  },

  // Past date validation
  pastDate: {
    custom: {
      options: (value: string) => {
        if (!isValidDate(value)) {
          throw new Error('Please provide a valid date');
        }
        if (!isPastDate(value)) {
          throw new Error('Date must be in the past');
        }
        return true;
      },
    },
  },
};

// Export validation utilities
export {
    body, checkSchema, cookie, header, param,
    query
} from 'express-validator';

