import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { APP_CONST } from '@/libs/data/index'
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || APP_CONST?.ENV?.JWT_SECRET,
      signOptions: {
        expiresIn: (process?.env?.REFRESH_TOKEN_EXPIRES_IN || APP_CONST?.ENV?.REFRESH_TOKEN_EXPIRES_IN) as any
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
