import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { ConfigModule } from '@nestjs/config';
import { UserService } from 'src/modules/user/user.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    ConfigModule,
  ],
  providers: [GoogleStrategy, UserService],
  exports: [PassportModule],
})
export class AuthModule {}
