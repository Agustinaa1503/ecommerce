import { IsArray, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class UpdateProductDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    id: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    price: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    inStock: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    gender: string;

    @ApiProperty()
    @IsArray()
    @IsOptional()
    @IsString({ each: true })
    images: string[];

    
    // @IsString()
    // @IsOptional()
    // images: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    slug: string;

}