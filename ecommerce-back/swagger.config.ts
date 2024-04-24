import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle("Ecommerce API")
    .setDescription("The Ecommerce API description")
    .setVersion("1.0")
    .addTag("ecommerce")
    .build();