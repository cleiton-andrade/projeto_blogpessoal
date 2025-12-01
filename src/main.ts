import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ajustando o horario do banco de dados
  process.env.TZ = '-03:00';

  // Aplicando os recursos de validação
  app.useGlobalPipes(new ValidationPipe());

  // Habilitando o coors
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
