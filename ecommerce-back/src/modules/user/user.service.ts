import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User, UserDocument } from '../../schema/user.schema';


@Injectable()
export class UserService {

  private readonly logger = new Logger(UserService.name);

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async findOne(_id: string): Promise<User> {
    return this.userModel.findById(_id).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    } catch (error) {
      this.logger.error('Error al crear usuario en MongoDB', error);
      throw error; // Puedes personalizar el manejo del error según tu necesidad
    }
  }

  async update(_id: string, updateUser: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(_id, updateUser, { new: true }).exec();
  }

  async delete(_id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(_id).exec();
  }
}
