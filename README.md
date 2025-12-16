# RabbitMQ Notification Service

[Project URL](https://notification-service-rabbitmq.onrender.com)

## Project Overview
The RabbitMQ Notification Service is a NestJS-based microservice designed to handle email notifications for the Naga Collections platform. The service consumes messages from RabbitMQ queues published by the User Service and sends responsive HTML emails via Gmail SMTP. It features dedicated queue handlers for OTP verification and welcome emails with professional templates.

## Features
- **RabbitMQ Integration**: Consumes messages from dedicated queues for OTP and welcome notifications
- **Email Service**: Gmail SMTP integration via Nodemailer for reliable email delivery
- **Responsive Templates**: Mobile-optimized HTML email templates with animations
- **Dual Notification Types**: Separate handlers for OTP verification and welcome emails
- **Error Handling**: Comprehensive logging with automatic retry on failure
- **Rate Limiting**: Protection against abuse (100 requests per 15 minutes)
- **Input Validation**: DTO-based validation with class-validator
- **RESTful Endpoint**: Manual email sending via HTTP POST

## Table of Contents
Installation<br />
Environment Variables<br />
Project Structure<br />
Event-Driven Architecture<br />
API Routes<br />
Technologies Used<br />
Testing<br />

## Installation
To install and run the project locally:

#### Clone the repository:

```bash
git clone https://github.com/your-username/rabbitmq-notification-service.git
```

#### Navigate into the project directory:

```bash
cd rabbitmq-notification-service
```

#### Install dependencies:

```bash
npm install
```

#### Create a .env file in the root directory (see the Environment Variables section)

#### Build the project:

```bash
npm run build
```

#### Start the development server:

```bash
npm run start:dev
```

#### Start the production server:

```bash
npm run start:prod
```

## Environment Variables
Create a .env file in the root directory with the following variables:

```env
# SERVER
PORT=3005
NODE_ENV=development

# RABBITMQ
RABBITMQ_URL=amqp://localhost
RABBITMQ_EXCHANGE=user-events
SIGNUP_ROUTING_KEY=user.signup
VERIFIED_ROUTING_KEY=user.verified
OTP_QUEUE=otp-notifications
WELCOME_QUEUE=welcome-notifications

# EMAIL
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
```

## Project Structure

```
├── src
│   ├── config
│   │   └── index.ts
│   ├── email
│   │   ├── config
│   │   │   └── nodemailer.ts
│   │   ├── dto
│   │   │   ├── create-email.dto.ts
│   │   │   └── update-email.dto.ts
│   │   ├── templates
│   │   │   └── email-templates.ts
│   │   ├── email.controller.ts
│   │   ├── email.module.ts
│   │   └── email.service.ts
│   ├── filters
│   │   └── exception-filter.ts
│   ├── rabbitmq
│   │   ├── dto
│   │   │   ├── create-rabbitmq.dto.ts
│   │   │   └── update-rabbitmq.dto.ts
│   │   ├── rabbitmq.controller.ts
│   │   ├── rabbitmq.module.ts
│   │   └── rabbitmq.service.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .env
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

## Event-Driven Architecture

This service consumes messages from RabbitMQ queues published by the User Service. Each queue handles specific notification types.

### Consumed Events

#### 1. OTP Notification
**Exchange**: `user-events` (direct)  
**Routing Key**: `user.signup`  
**Queue**: `otp-notifications`  
**Payload**:
```json
{
  "email": "user@example.com",
  "first_name": "John",
  "otp": "123456"
}
```
**Action**: Sends OTP verification email with 15-minute validity

#### 2. Welcome Notification
**Exchange**: `user-events` (direct)  
**Routing Key**: `user.verified`  
**Queue**: `welcome-notifications`  
**Payload**:
```json
{
  "email": "user@example.com",
  "first_name": "John"
}
```
**Action**: Sends welcome email with platform features

## API Routes

<table>
  <thead>
    <tr>
      <th>HTTP Method</th>
      <th>Endpoint</th>
      <th>Description</th>
      <th>Auth Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/email/send</td>
      <td>Manually send an email</td>
      <td>No</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/</td>
      <td>Health check endpoint</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Technologies Used

<ul>
<li>NestJS - Progressive Node.js framework</li>
<li>TypeScript - Type-safe JavaScript</li>
<li>RabbitMQ - Message broker for event-driven communication</li>
<li>@golevelup/nestjs-rabbitmq - RabbitMQ integration</li>
<li>Nodemailer - Email sending library</li>
<li>class-validator - DTO validation</li>
<li>class-transformer - Object transformation</li>
<li>express-rate-limit - Rate limiting middleware</li>
<li>Jest - Testing framework</li>
<li>ESLint - Code linting</li>
<li>Prettier - Code formatting</li>
</ul>

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## License

This project is MIT licensed.

