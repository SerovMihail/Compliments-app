/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import * as Sentry from '@sentry/node';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: '*' } });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  Sentry.init({
    dsn: 'https://5a3ff99d418e45a98005e25a99b535b8@o1178002.ingest.sentry.io/6288824'
  });

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
