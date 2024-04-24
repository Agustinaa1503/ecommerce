import { Controller, Get, Post, Delete, Put, Body, Param, NotFoundException, HttpCode, HttpStatus, HttpException, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { Product } from 'src/schema/products.schema';
import { UpdateProductDto } from 'src/dto/update-product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

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
    @ApiBody({ type: CreateProductDto }) 
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'images', maxCount: 10 },
    ]))
    async create(@Body() body: CreateProductDto, @UploadedFiles() files: { images?: Express.Multer.File[] }): Promise<Product> {
        try {
            if (!files || !files.images) {
                throw new HttpException('No se encontraron archivos de imágenes', HttpStatus.BAD_REQUEST);
            }
            const imagePaths = files.images.map(image => image.path);
            const newProduct = await this.productsService.create(body, imagePaths);
            return newProduct;
        } catch (error) {
            if (error.code === 11000) {
                throw new HttpException('El producto ya existe', HttpStatus.CONFLICT);
            } else {
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
            throw new HttpException('Producto no modificado, no existe', HttpStatus.NOT_FOUND);
        }
        return product;
    }
}
