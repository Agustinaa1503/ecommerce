import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './database.service';
import { User, UserSchema } from 'src/schema/user.schema';
import { Admin, AdminSchema } from 'src/schema/admin.schema';
import { Product, ProductSchema } from 'src/schema/products.schema';


@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, cache: true }),
        MongooseModule.forFeature([
            { name: Admin.name, schema: AdminSchema },
            { name: Product.name, schema: ProductSchema },
            { name: User.name, schema: UserSchema }
        ])
    ],
    providers: [MongooseConfigService],
    exports: [MongooseConfigService]
})

export class DatabaseModule { }