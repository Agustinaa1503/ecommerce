import { IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class UpdateUserDto {


    @ApiProperty()
    @IsString()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    name: string;

    // @ApiProperty()
    // @IsString()
    // @IsOptional()
    // lastName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MinLength(8)
    phone: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MinLength(6)
    password: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MinLength(6)
    confirmPassword: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    status: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    picture: string;
}
