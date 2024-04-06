import { Controller, Get, Post, Delete, Put, Body, Param, NotFoundException, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { Product } from 'src/schema/products.schema';
import { UpdateProductDto } from 'src/dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    async findAll(): Promise<Product[]> {
        return await this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const product = await this.productsService.findOne(id);
        if (!product) {
            throw new NotFoundException('Producto no encontrado');
        }
        return product;
        
    }

    @Post()
    async create(@Body() body: CreateProductDto) {
        try {
            // Intenta crear el producto
            const newProduct = await this.productsService.create(body);
            
            // Si se crea correctamente, devuelve el producto creado
            return newProduct;
        } catch (error) {
            // Si hay un error, verifica si es un error de conflicto (producto existente)
            if (error.code === 11000) {
                // Lanza una excepción de conflicto con un mensaje personalizado
                throw new HttpException('El producto ya existe', HttpStatus.CONFLICT);
            } else {
                // Si no es un error de conflicto, lanza el error original
                throw error;
            }
        }
    }
    

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const product = await this.productsService.delete(id);
        if (!product) {
            throw new NotFoundException('Producto no encontrado para ser eliminado');
        }
        return HttpStatus.NO_CONTENT; 
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateProductDto) {
        const product = await this.productsService.update(id, body);
        if (!product) {
            throw new NotFoundException('Producto no modificado, no existe');
        }
        return product;
    }
}
