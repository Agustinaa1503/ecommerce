import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { HydratedDocument } from 'mongoose';
import { STATUS } from "src/common/enums/status.enum";

export type AdminDocument = HydratedDocument<Admin>;

@Schema({ timestamps: true })

export class Admin {
  @Prop({ type: String, required: true, unique: true })
  uid: string;

  @Prop({ type: String, required: true })
  @IsEmail()
  email: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String, enum: Object.values(STATUS), default: STATUS.INACTIVE })
  status: string;

  @Prop({ type: String })
  profilePicture: string;

}

export const AdminSchema = SchemaFactory.createForClass(Admin);
