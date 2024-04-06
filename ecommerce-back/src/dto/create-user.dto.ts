import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    uid: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    phone: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    confirmPassword: string;

    @IsString()
    @IsOptional()
    status: string;

    @IsString()
    @IsOptional()
    profilePicture: string;
}

// export class CreateUserDto {
//     readonly uid: string;
//     readonly email: string;
//     readonly firstName: string;
//     readonly lastName: string;
//     readonly status: string;
//     readonly profilePicture: string;
// }  