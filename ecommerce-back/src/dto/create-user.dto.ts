import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    //@IsOptional()
    email: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // @IsOptional()
    // name: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // @IsOptional()
    // @MinLength(8)
    // phone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    //@IsOptional()
    @MinLength(6)
    password: string;

    // @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    // @IsOptional()
    // accessToken: string;

    // @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    // @IsOptional()
    // refreshToken: string;

    // @ApiProperty()
    // @IsString()
    // @IsNotEmpty()
    // @IsOptional()
    // @MinLength(6)
    // confirmPassword: string;

    // @ApiProperty()
    // @IsString()
    // @IsOptional()
    // status: string;

    // @ApiProperty()
    // @IsString()
    // @IsOptional()
    // image: string;
}
