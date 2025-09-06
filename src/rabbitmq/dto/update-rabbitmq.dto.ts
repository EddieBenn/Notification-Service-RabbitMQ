import { PartialType } from '@nestjs/mapped-types';
import { OTPNotificationDto } from './create-rabbitmq.dto';

export class UpdateRabbitmqDto extends PartialType(OTPNotificationDto) {}
