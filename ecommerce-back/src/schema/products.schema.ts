import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class Product {

    @Prop({ trim: true, unique: true, required: true })
    id: string;
    
    @Prop({ trim: true, unique: true })
    title: string;

    @Prop({ trim: true })
    description: string;

    @Prop ({trim: true})
    price: string;

    @Prop ({trim: true})
    inStock: string;

    @Prop ({ trim: true })
    images: string;

    @Prop({ trim: true })
    gender: string;

    @Prop({ trim: true })
    slug: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)