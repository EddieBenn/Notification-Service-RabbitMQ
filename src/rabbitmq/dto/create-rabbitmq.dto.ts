import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class OTPNotificationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  otp: string;
}

export class WelcomeNotificationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;
}
