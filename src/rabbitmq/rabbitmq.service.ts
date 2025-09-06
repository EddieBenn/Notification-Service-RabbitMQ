import { Injectable } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { EmailService } from '../email/email.service';
import {
  OTPNotificationDto,
  WelcomeNotificationDto,
} from './dto/create-rabbitmq.dto';
import {
  emailVerificationTemplate,
  welcomeUserTemplate,
} from 'src/email/templates/email-templates';
import { config } from 'src/config';

@Injectable()
export class RabbitmqService {
  constructor(private readonly emailService: EmailService) {}

  @RabbitSubscribe({
    exchange: config.RABBITMQ_EXCHANGE,
    routingKey: config.SIGNUP_ROUTING_KEY,
    queue: config.OTP_QUEUE,
  })
  async handleOTPNotification(data: OTPNotificationDto) {
    try {
      await this.emailService.sendEmail({
        to: data.email,
        subject: 'Verify Your Email',
        body: emailVerificationTemplate(data.otp),
        from: `"Naga Collections" <noreply@nagacollections.com>`,
      });
    } catch (error) {
      console.error('Failed to send OTP email:', error);
      throw error;
    }
  }

  @RabbitSubscribe({
    exchange: config.RABBITMQ_EXCHANGE,
    routingKey: config.VERIFIED_ROUTING_KEY,
    queue: config.WELCOME_QUEUE,
  })
  async handleWelcomeNotification(data: WelcomeNotificationDto) {
    try {
      await this.emailService.sendEmail({
        to: data.email,
        subject: 'Welcome to Naga Collections!',
        body: welcomeUserTemplate(data.first_name),
        from: `"Naga Collections" <noreply@nagacollections.com>`,
      });
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      throw error;
    }
  }
}
