import { Body, Controller, Post, Res } from '@nestjs/common';
import { type Response} from 'express'

import { APP_CONST } from '@/libs/data/app.const'
import { WrapperService } from '@/libs/services/wrapper/wrapper.service';

import { UserDto } from './dto/user.req.dto';
import { UserService } from './user.service';

@Controller(APP_CONST.MODULES.USER)
export class UserController {
  constructor(
    private readonly usersService: UserService,
    private readonly ws: WrapperService
  ) {}

  @Post(APP_CONST.PATH.USER.CREATE)
  create(@Body() body: UserDto, @Res() res: Response){
    return this.ws.Service<UserService>(res, this.usersService, this.usersService.create, body)
  }
}
