import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { DatabaseModule } from './services/data/database.module';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGO_URI');
        console.log('MONGO_URI:', uri);
        return {
          uri,
        };
      },
      inject: [ConfigService],
    }),
    ProductsModule,
    UserModule,
    AdminModule,
    DatabaseModule,
    MulterModule.register({ 
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null,`${file.originalname}-${Date.now()}` )
        }
      })
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
