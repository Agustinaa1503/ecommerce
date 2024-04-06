import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { HydratedDocument } from "mongoose";
import { STATUS } from "src/common/enums/status.enum";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })

export class User {
  @Prop({ type: String, required: true, unique: true })
  uid: string;

  @Prop({ type: String, required: true })
  @IsEmail()
  email: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  phone: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: String })
  confirmPassword: string;

  @Prop({ type: String, enum: Object.values(STATUS), default: STATUS.INACTIVE })
  status: string;

  @Prop({ type: String })
  profilePicture: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
