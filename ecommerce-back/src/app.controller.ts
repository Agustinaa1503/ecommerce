import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsController } from './modules/products/products.controller';
import { UsersController } from './modules/user/user.controller';
import { AdminsController } from './modules/admin/admin.controller';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productsController: ProductsController,
    private readonly usersController: UsersController,
    private readonly adminsController: AdminsController,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Rutas para productos
  @Get('products')
  getAllProducts() {
    return this.productsController.findAll();
  }

  @Get('products/:id')
  getProductById(@Param('id') id: string) {
    return this.productsController.findOne(id);
  }

  // Rutas para usuarios
  @Get('users')
  getAllUsers() {
    return this.usersController.findAll();
  }

  @Get('users/:id')
  getUserById(@Param('id') id: string) {
    return this.usersController.findOne(id);
  }

  // Rutas para administradores
  @Get('admins')
  getAllAdmins() {
    return this.adminsController.findAll();
  }

  @Get('admins/:id')
  getAdminById(@Param('id') id: string) {
    return this.adminsController.findOne(id);
  }
}
