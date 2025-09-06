import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  DEFAULT_PER_PAGE: 10,
  DEFAULT_PAGE_NO: 1,
  PORT: Number(process.env.PORT) || 3005,
  APP_URL: process.env.APP_URL || 'http://localhost:',
  RABBITMQ_URL: process.env.RABBITMQ_URL || 'amqp://localhost',
  RABBITMQ_EXCHANGE: process.env.RABBITMQ_EXCHANGE,
  SIGNUP_ROUTING_KEY: process.env.SIGNUP_ROUTING_KEY,
  VERIFIED_ROUTING_KEY: process.env.VERIFIED_ROUTING_KEY,
  OTP_QUEUE: process.env.OTP_QUEUE,
  WELCOME_QUEUE: process.env.WELCOME_QUEUE,
  NODE_ENV: process.env.NODE_ENV || 'development',
  GMAIL_USER: process.env.GMAIL_USER || '',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || '',
};
