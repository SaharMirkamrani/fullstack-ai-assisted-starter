import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface ServerConfig {
  port: number;
  nodeEnv: string;
  apiVersion: string;
}

interface SecurityConfig {
  rateLimit: {
    windowMs: number;
    maxRequests: number;
  };
  slowDown: {
    windowMs: number;
    delayAfter: number;
    delayMs: number;
  };
}

interface CORSConfig {
  origin: string | string[];
  credentials: boolean;
}

interface LoggingConfig {
  level: string;
  filePath: string;
}

interface FeaturesConfig {
  swagger: boolean;
  rateLimiting: boolean;
  compression: boolean;
  logging: boolean;
}

interface Config {
  server: ServerConfig;
  security: SecurityConfig;
  cors: CORSConfig;
  logging: LoggingConfig;
  features: FeaturesConfig;
}

export const config: Config = {
  server: {
    port: parseInt(process.env['PORT'] || '3001', 10),
    nodeEnv: process.env['NODE_ENV'] || 'development',
    apiVersion: process.env['API_VERSION'] || 'v1',
  },
  security: {
    rateLimit: {
      windowMs: parseInt(process.env['RATE_LIMIT_WINDOW_MS'] || '900000', 10),
      maxRequests: parseInt(process.env['RATE_LIMIT_MAX_REQUESTS'] || '100', 10),
    },
    slowDown: {
      windowMs: parseInt(process.env['SLOW_DOWN_WINDOW_MS'] || '900000', 10),
      delayAfter: parseInt(process.env['SLOW_DOWN_DELAY_AFTER'] || '100', 10),
      delayMs: parseInt(process.env['SLOW_DOWN_DELAY_MS'] || '500', 10),
    },
  },
  cors: {
    origin: process.env['CORS_ORIGIN'] 
      ? process.env['CORS_ORIGIN'].split(',') 
      : 'http://localhost:3000',
    credentials: process.env['CORS_CREDENTIALS'] === 'true',
  },
  logging: {
    level: process.env['LOG_LEVEL'] || 'info',
    filePath: process.env['LOG_FILE_PATH'] || './logs/app.log',
  },
  features: {
    swagger: process.env['ENABLE_SWAGGER'] === 'true',
    rateLimiting: process.env['ENABLE_RATE_LIMITING'] !== 'false',
    compression: process.env['ENABLE_COMPRESSION'] !== 'false',
    logging: process.env['ENABLE_LOGGING'] !== 'false',
  },
}; 
