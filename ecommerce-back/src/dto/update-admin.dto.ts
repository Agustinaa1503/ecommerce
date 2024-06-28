import { ArrayUnique,ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { AGENT_OPTIONS } from '../common/enums/role-type.enum';

export class UpdateAdminDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    name: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // @IsOptional()
    // lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    phone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    confirmPassword: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    status: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    picture: string;

    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsOptional()
    agentOptions: AGENT_OPTIONS[];
}
