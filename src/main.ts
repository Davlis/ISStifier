import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('ISStifier documentation')
    .setDescription('The ISStifier API description')
    .setVersion('1.0')
    .addTag('ISStifier')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
