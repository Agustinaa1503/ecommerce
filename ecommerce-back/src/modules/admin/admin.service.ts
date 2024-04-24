import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from '../../dto/create-admin.dto';
import { UpdateAdminDto } from '../../dto/update-admin.dto';
import { Admin, AdminDocument } from '../../schema/admin.schema';

@Injectable()
export class AdminService {

    private readonly logger = new Logger(AdminService.name);

    constructor(@InjectModel(Admin.name) private adminModel: Model<AdminDocument>) {}

    async findAll(): Promise<Admin[]> {
        return this.adminModel.find().exec();
    }

    async findOneByEmail(email: string): Promise<Admin> {
        return this.adminModel.findOne({ email }).exec();
      }

    async findOne(_id: string): Promise<Admin> {
        return this.adminModel.findById(_id).exec();
    }

    async create(CreateAdminDto: CreateAdminDto): Promise<Admin> {
        try {
            const createAdmin = new this.adminModel(CreateAdminDto);
            return createAdmin.save();
        } catch (error) {
            this.logger.error('Error al crear usuario en MongoDB', error);
            throw error;
        }
    }

    async update(_id: string, admin: UpdateAdminDto): Promise<Admin> {
        return this.adminModel.findByIdAndUpdate(_id, admin, { new: true }).exec();
    }

    async delete(_id: string): Promise<Admin> {
        return this.adminModel.findByIdAndDelete(_id).exec();
    }


}