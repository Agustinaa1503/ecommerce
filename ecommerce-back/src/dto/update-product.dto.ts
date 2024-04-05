import {IsOptional, IsString } from "class-validator";

export class UpdateProductDto {

    @IsOptional()
    @IsString()
    id: string;

    @IsOptional()
    @IsString()
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