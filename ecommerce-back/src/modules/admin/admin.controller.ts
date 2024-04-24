import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus, HttpException } from "@nestjs/common";
import {CreateAdminDto} from '../../dto/create-admin.dto'
import { UpdateAdminDto } from "src/dto/update-admin.dto";
import { AdminService } from './admin.service';
import { Admin } from "src/schema/admin.schema";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@Controller('admin')
@ApiTags('Admin')
export class AdminController {

    constructor(private readonly adminService: AdminService) {}

    @Post()
    @ApiBody({ type: CreateAdminDto })
    async create(@Body() createAdminDto: CreateAdminDto) {
        try {

            const existingAdmin = await this.adminService.findOneByEmail(createAdminDto.email);
            if (existingAdmin) {
                throw new HttpException('El administrador ya existe', HttpStatus.CONFLICT);
            }

            const newAdmin = await this.adminService.create(createAdminDto);
            return newAdmin;
        } catch (error) {
            if (error.code === 11000) {
                throw new HttpException('El administrador ya existe', HttpStatus.CONFLICT);
            } else {
                throw error;
            }
        }
    }

    @Get()
    async findAll(): Promise<Admin[]> {
        return await this.adminService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') _id: string) {
        const admin = await this.adminService.findOne(_id);
        if (!admin) {
            throw new HttpException('Administrador no encontrado', HttpStatus.NOT_FOUND);
        }
        return admin;
    }

    @Put(':id')
    async update(@Param('id') _id: string, @Body() updateAdmin: UpdateAdminDto) {
        const admin = await this.adminService.update(_id, updateAdmin);
        if (!admin) {
            throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }
        return admin;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') _id: string) {
        const admin = await this.adminService.delete(_id);
        if (!admin) {
            throw new HttpException('Administrador no encontrado', HttpStatus.NOT_FOUND);
        }
        return HttpStatus.NO_CONTENT;
    }
}

