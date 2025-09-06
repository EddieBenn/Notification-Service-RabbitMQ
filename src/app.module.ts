import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { config } from './config';
import { EmailModule } from './email/email.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    RabbitMQModule.forRoot({
      uri: config.RABBITMQ_URL,
      exchanges: [
        {
          name: config.RABBITMQ_EXCHANGE,
          type: 'direct',
        },
      ],
      connectionInitOptions: { wait: true, timeout: 5000 },
    }),
    EmailModule,
    RabbitmqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
