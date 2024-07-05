import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User, UserDocument } from '../../schema/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtSvc: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async create(createUserDto: Partial<CreateUserDto>): Promise<{ message: string }> {
    try {
      // Comento esta linea ya que desde el front hace la comparacion de las password ingresadas
      // Encriptar contraseña y confirmación de contraseña
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      // const hashedConfirmPassword = await bcrypt.hash(
      //   createUserDto.confirmPassword,
      //   10,
      //);

      // Crear un nuevo usuario con los datos proporcionados y las contraseñas hasheadas
      const newUser = new this.userModel({
        ...createUserDto,
        password: hashedPassword,
        isActive: false,
        //confirmPassword: hashedConfirmPassword,
      });

      // Generar tokens de acceso y refresco
      //const { accessToken, refreshToken } =
        // await this.generateAccessToken(newUser);

      // Asignar los tokens al usuario
      //newUser.accessToken = accessToken;
      //newUser.refreshToken = refreshToken;

      // Guardar el nuevo usuario en la base de datos
      //const user = await newUser.save();
      await newUser.save();

      // Devolver el usuario creado con los tokens de acceso y refresco
      return { message: 'Porfavor confirma tu Email'
        //...user.toObject(),
        //status: HttpStatus.CREATED.toString(),
        //accessToken,
        //refreshToken,
      };

      
    
    } catch (error) {
      this.logger.error('Error al crear usuario en MongoDB', error);
      throw error;
    }
  }

  //CAPTURA DE USUARIOS ELIMINADOS POR EMAIL
  async deleteUser(email: string): Promise<void> {
    // Eliminar el usuario de la base de datos
    await this.userModel.findByIdAndDelete(email).exec();
    // Manejar evento de eliminación aquí (p. ej., registrar en el archivo de registro)
    console.log(`Usuario con email ${email} eliminado correctamente.`);
  }

  loginUser = async (email: string, password: string) => {
    try {
      const user = await this.userModel.findOne({ email }).exec();
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new HttpException(
          'Contraseña incorrecta',
          HttpStatus.UNAUTHORIZED,
        );
      }
      if (user && isPasswordValid) {
        const payload = { sub: user._id, firstName: user.email, };
        const { accessToken, refreshToken } =
          await this.generateAccessToken(payload);

        return {
          ...user.toObject(),
          accessToken,
          refreshToken,
          message: 'Inicio de sesión exitoso',
        };
      }
    } catch (error) {
      this.logger.error('Error al iniciar sesión', error);
      throw error;
    }
  };

  async update(id: string, updateUser: UpdateUserDto): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, updateUser, { new: true })
      .exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  // // async refreshToken(id: string) {
  // //   try {
  // //     //Verificar el token de refresco
  // //     const decoded = this.jwtSvc.verify(id, {
  // //       secret: 'JWT_SECRET_REFRESH',
  // //     })

  // //     // Verifica si el usuario existe en la base de datos (opcional)
  // //   const user = await this.userModel.findById(decoded.sub).exec();
  // //   if (!user) {
  // //     throw new HttpException('Usuario no encontrado', HttpStatus.UNAUTHORIZED);
  // //   }

  // //   // Generar nuevo accessToken y refreshToken
  // //     const payload = { sub: user._id, email: user.email, name: user.name };
  // //     const { accessToken, refreshToken } = await this.generateAccessToken(payload);

  // //     return {
  // //       accessToken,
  // //       refreshToken,
  // //       status: HttpStatus.OK,
  // //       message: 'Refresh Token exitoso',
  // //     };

  //   } catch (error) {
  //     throw new HttpException(
  //       'Refresh Token invalido',
  //       HttpStatus.UNAUTHORIZED,
  //     );
  //   }
  // }

  async refreshToken(refreshToken: string) {
    try {
      const user = await this.jwtSvc.verify(refreshToken, {
        secret: 'JWT_SECRET_REFRESH',
      });

      const payload = { id: user._id, fristName: user.fristName, lastName: user.lastName, email: user.email, role: user.role };

      const { accessToken } = await this.generateAccessToken(payload);

      return {
        accessToken,
        refreshToken,
        status: HttpStatus.OK,
        message: 'Refresh Token exitoso',
      };
    } catch (error) {}
  }

  private async generateAccessToken(user): Promise<Tokens> {
    const jwtPayload = {
      id: user._id, 
      fristName: user.fristName, 
      lastName: user.lastName, 
      email: user.email, 
      role: user.role
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtSvc.signAsync(jwtPayload, {
        expiresIn: '24h',
        secret: 'JWT_SECRET',
      }),
      this.jwtSvc.signAsync(jwtPayload, {
        expiresIn: '7d',
        secret: 'JWT_SECRET_REFRESH',
      }),
    ]);

    return { accessToken: accessToken, refreshToken: refreshToken };
  }
}
