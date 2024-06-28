import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class LoginUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @MinLength(6)
    password: string;

}
