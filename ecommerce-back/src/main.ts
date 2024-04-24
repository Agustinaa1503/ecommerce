import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GlobalExceptionFilter } from './services/data/mongodb/filters/exception.filter';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from 'swagger.config'; // Corregir la ruta de importación
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  console.log('MONGO_URI:', configService.get<string>('MONGO_URI')); 

  //Habilitar CORS
  app.enableCors({ origin: '*' });

  //Establecer prefijo global para las rutas
  app.setGlobalPrefix('api');

  //Usar tubería de validación global
  app.useGlobalPipes(new ValidationPipe());

  //Usar filtro de excepciones global
  app.useGlobalFilters(new GlobalExceptionFilter());
  
  await app.listen(8080);
}
bootstrap();
