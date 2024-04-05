import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/products'),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


