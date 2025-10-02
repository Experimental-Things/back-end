import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

import { DatabaseService } from '@/libs/config/database/database.service';
import { UserDto } from './dto/user.req.dto';
import { CreateUserResDto } from './dto/user.res.dto'
import { APP_CONST  } from '@/libs/data/app.const';
import { Mapper, CatchErrorMapper, HashValue } from '@/libs/utils'

@Injectable()
export class UserService {
    constructor(
        private readonly DB: DatabaseService
    ) {}
    async create(body: UserDto) {
        try{
            // password hasing
            body.password  = await HashValue(body.password)

            // insert user to collection
            const { Users } = this.DB.GET_MODEL()
            const data = await this.DB.create(Users, body)
            return Mapper(CreateUserResDto, { data })
        }catch(error){
            return CatchErrorMapper(error)
        }
    }
}
