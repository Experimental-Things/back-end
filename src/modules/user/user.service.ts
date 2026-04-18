import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@/libs/config/database/database.service';
import { UserDto } from './dto/user.req.dto';
import { CreateUserResDto } from './dto/user.res.dto';
import { APP_CONST } from '@/libs/data';
import { Mapper, CatchErrorMapper, HashValue } from '@/libs/utils';

@Injectable()
export class UserService {
  constructor(private readonly DB: DatabaseService) {}
  async create(body: UserDto) {
    const serviceResponse = APP_CONST?.BASE_RESPONSE;
    try {
      // password hasing
      body.password = await HashValue(body.password);

      // insert user to collection
      const { Users } = this.DB.GET_MODEL();
      serviceResponse.data = await this.DB.create(Users, body);
      return Mapper(CreateUserResDto, serviceResponse);
    } catch (error) {
      return CatchErrorMapper(error);
    }
  }
}
