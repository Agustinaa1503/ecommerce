import { Controller, Get, Param } from '@nestjs/common';
// import { AppService } from './app.service';
import { ProductsController } from './modules/products/products.controller';
import { UserController } from './modules/user/user.controller';
import { AdminController } from './modules/admin/admin.controller';
import { ApiTags, ApiParam, ApiOkResponse } from '@nestjs/swagger';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(
    // private readonly appService: AppService,
    private readonly productsController: ProductsController,
    private readonly userController: UserController,
    private readonly adminController: AdminController,
  ) {}

  // Rutas para productos
  @Get('products')
  @ApiOkResponse({ 'description': 'Listado de todos los productos' }) //type: Product, isArray: true
  getAllProducts() {
    return this.productsController.findAll();
  }

  @Get('products/:id')
  @ApiOkResponse({ 'description': 'Detalle del producto por ID' })
  @ApiParam({ name: 'id', description: 'ID del producto' })
  getProductById(@Param('id') id: string) {
    return this.productsController.findOne(id);
  }

  // Rutas para usuarios
  @Get('user')
  @ApiOkResponse({ 'description': 'Listado de todos los usuarios' })
  getAllUsers() {
    return this.userController.findAll();
  }

  @Get('user/:id')
  @ApiOkResponse({ 'description': 'Usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario' })
  getUserById(@Param('id') id: string) {
    return this.userController.findOne(id);
  }

  // Rutas para administradores
  @Get('admin')
  @ApiOkResponse({ 'description': 'Listado de todos los administradores' })
  getAllAdmins() {
    return this.adminController.findAll();
  }

  @Get('admin/:id')
  @ApiOkResponse({ 'description': 'Administrador por ID' })
  @ApiParam({ name: 'id', description: 'ID del administrador' })
  getAdminById(@Param('id') id: string) {
    return this.adminController.findOne(id);
  }
}
