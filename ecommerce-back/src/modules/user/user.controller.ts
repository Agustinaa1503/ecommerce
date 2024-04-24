import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from 'src/schema/user.schema';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const existingUser = await this.userService.findOneByEmail(createUserDto.email);
      if (existingUser) {
        throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT);
      }

      const newUser = await this.userService.create(createUserDto);
      return newUser;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Error de validación de datos
        throw new HttpException('Datos de usuario no válidos', HttpStatus.BAD_REQUEST);
      } else {
        // Otros tipos de errores
        throw new HttpException('Error al procesar la solicitud, datos duplicados', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') _id: string) {
    const user = await this.userService.findOne(_id);
    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Put(':id')
  async update(@Param('id') _id: string, @Body() updateUser: UpdateUserDto) {
    const user = await this.userService.update(_id, updateUser);
    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') _id: string) {
    const user = await this.userService.delete(_id);
    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
    return HttpStatus.NO_CONTENT;
  }
}
