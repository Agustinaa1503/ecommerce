import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { HydratedDocument } from 'mongoose';
import { STATUS } from "src/common/enums/status.enum";
import { AGENT_OPTIONS } from "src/common/enums/role-type.enum";

export type AdminDocument = HydratedDocument<Admin>;

@Schema({ timestamps: true })

export class Admin {

  @Prop({ type: String, required: true, unique: true })
  @IsEmail()
  email: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String, enum: Object.values(STATUS), default: STATUS.ACTIVE })
  status: string;

  @Prop({ type: String })
  profilePicture: string;

  @Prop({ type: [{ type: String, enum: Object.values(AGENT_OPTIONS) }] }) 
  agentOptions: AGENT_OPTIONS[]; 

}

export const AdminSchema = SchemaFactory.createForClass(Admin);
