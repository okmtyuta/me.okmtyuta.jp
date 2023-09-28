import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
}
bootstrap();
