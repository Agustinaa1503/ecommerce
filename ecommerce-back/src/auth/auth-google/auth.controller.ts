import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { Response } from 'express'; // Importa el tipo Response de express
import { AuthGuard } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly googleStrategy: GoogleStrategy) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    // Redirecciona a la página principal o la página de perfil del usuario después de iniciar sesión
    res.redirect('/');
  }
}
