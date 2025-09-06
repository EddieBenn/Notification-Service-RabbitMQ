import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  DEFAULT_PER_PAGE: 10,
  DEFAULT_PAGE_NO: 1,
  PORT: Number(process.env.PORT) || 3005,
  APP_URL: process.env.APP_URL || 'http://localhost:',
  RABBITMQ_URL: process.env.RABBITMQ_URL || 'amqp://localhost',
  RABBITMQ_EXCHANGE: 'user_exchange',
  SIGNUP_ROUTING_KEY: 'user.created',
  VERIFIED_ROUTING_KEY: 'user.verified',
  NODE_ENV: process.env.NODE_ENV || 'development',
};
