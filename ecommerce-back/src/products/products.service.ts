import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';
import { Product } from 'src/schema/products.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async create(createProduct: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProduct);
        return createdProduct.save();
    }


    async findOne(id: string): Promise<Product> {
        return this.productModel.findById(id).exec();
    }

    async delete(id: string): Promise<Product> {
        return this.productModel.findByIdAndDelete(id).exec();
    }

    async update(id: string, product: UpdateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, product, { new: true }).exec();
    }
}

