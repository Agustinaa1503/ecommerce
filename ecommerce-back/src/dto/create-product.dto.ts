import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    id: string;

    @IsString()
    @IsNotEmpty()
    // @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    price: string;

    @IsString()
    @IsOptional()
    inStock: string;

    @IsString()
    @IsOptional()
    gender: string;

    // @IsArray()
    // @IsOptional()
    // images: string[];

    @IsString()
    @IsOptional()
    images: string;

    @IsString()
    @IsOptional()
    slug: string;
}
