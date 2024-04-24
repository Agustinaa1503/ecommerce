import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { HydratedDocument } from "mongoose";
import { STATUS } from "src/common/enums/status.enum";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })

export class User {

  @Prop({ type: String, required: true, unique: true, trim: true })
  @IsEmail()
  email: string;

  @Prop({ type: String, trim: true, required: true })
  firstName: string;

  @Prop({ type: String, trim: true, required: true })
  lastName: string;

  @Prop({ type: String, trim: true, required: true })
  phone: string;

  @Prop({ type: String, trim: true, required: true })
  password: string;

  @Prop({ type: String, trim: true, required: true })
  confirmPassword: string;

  @Prop({ type: String, trim: true, enum: Object.values(STATUS), default: STATUS.ACTIVE })
  status: string;

  @Prop({ type: String, trim: true })
  profilePicture: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
