import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './models/profile.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SentryInterceptor } from './interceptors/sentry-interceptor';

@Module({
  imports: [ProfileModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: SentryInterceptor
    }
  ]
})
export class AppModule {
}
