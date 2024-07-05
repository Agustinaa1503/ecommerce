import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { HydratedDocument } from "mongoose";
import { STATUS } from "src/common/enums/status.enum";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true }) // para crear el creatd y update

export class User {

  @Prop({ type: String, trim: true, required: false })
  firstName: string;

  @Prop({ type: String, trim: true, required: false })
  lastName: string;

  @Prop({ type: String, required: true, unique: true, trim: true })
  @IsEmail()
  email: string;

  @Prop({ type: String, trim: true })
  phone: string;

  @Prop({ type: String, required: true, trim: true })
  password: string;

  // @Prop({ type: String, trim: true })
  // confirmPassword: string;

  @Prop({ type: String, trim: true, required: false })
  image: string;

  @Prop({ type: String, trim: true, default:"Client" })
  role: string;

  @Prop({ type: String, trim: true })
  addres: string;

  @Prop({ type: String, trim: true })
  country: string;

  @Prop({ type: String, trim: true, enum: Object.values(STATUS), default: STATUS.PENDING })
  status: string;

  @Prop({ type: String, trim: true })
  dni: string;

  @Prop({ type: String, trim: true })
  accessToken: string;

  @Prop({ type: String, trim: true })
  refreshToken: string;

  @Prop({ type: String, trim: true })
  tempToken?: string;

  @Prop({ type: Boolean, default: false })
  isActive: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);
