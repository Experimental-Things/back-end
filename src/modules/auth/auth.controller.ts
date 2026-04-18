import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { type Response } from 'express';

import { APP_CONST } from '@/libs/data';
import { WrapperService } from '@/libs/services/wrapper/wrapper.service';

import { LoginReqDto } from './dto/auth.req.dto';

@Controller(APP_CONST.MODULES.AUTH)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly ws: WrapperService,
  ) {}

  @Post(APP_CONST.PATH.AUTH.LOGIN)
  login(@Body() body: LoginReqDto, @Res() res: Response) {
    return this.ws.Service<AuthService>(
      res,
      this.authService,
      this.authService.login,
      body,
    );
  }

  logout() {
    // Todo: need to implement
  }
}
