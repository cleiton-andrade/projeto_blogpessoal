import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Generation Brasil","http://www.generationbrasil.online","generation@email.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  // Ajustando o horario do banco de dados
  process.env.TZ = '-03:00';

  // Aplicando os recursos de validação
  app.useGlobalPipes(new ValidationPipe());

  // Habilitando o coors
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
