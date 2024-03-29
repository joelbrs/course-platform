import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Course Platform')
    .setDescription('The Course Platform API')
    .setVersion('1.0')
    .addBearerAuth()
    // .addTag('courses')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('course-platform/swagger-ui.html', app, document);

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
