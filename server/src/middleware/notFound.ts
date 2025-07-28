import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

export const notFound = (req: Request, res: Response, _next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  logger.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
  
  res.status(404).json({
    success: false,
    message: 'Route not found',
    error: error.message,
    timestamp: new Date().toISOString(),
  });
}; 
