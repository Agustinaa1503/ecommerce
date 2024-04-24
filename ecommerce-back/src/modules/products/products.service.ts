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

    async create(createProductDto: CreateProductDto, images: string[]): Promise<Product> {
        // Procesa las imágenes como desees, por ejemplo, guardándolas en una carpeta en el sistema de archivos o en una base de datos
        // Aquí asumimos que las imágenes se guardan como nombres de archivo en un array
        const imageNames = images.map(image => image);

        // Crea un nuevo producto utilizando el DTO y las imágenes procesadas
        const createdProduct = new this.productModel({
            ...createProductDto,
            images: imageNames
        });

        // Guarda el producto en la base de datos
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

