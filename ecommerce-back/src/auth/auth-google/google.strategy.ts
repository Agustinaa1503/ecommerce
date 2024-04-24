import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../modules/user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: 'http://localhost:8080/auth/google/callback',
      passReqToCallback: true,
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    try {
      const email = profile.emails[0].value;
      let user = await this.userService.findOneByEmail(email);
      if (!user) {
        const newUser = await this.userService.create({
            email: email,
            // uid: '',
            firstName: '',
            lastName: '',
            phone: '',
            password: '',
            confirmPassword: '',
            status: '',
            profilePicture: ''
        });
        user = newUser;
      }
      done(null, user);
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT);
      } else {
        throw error;
      }
    }
  }
}
