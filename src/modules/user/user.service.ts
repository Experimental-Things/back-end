import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

import { DatabaseService } from '@/libs/config/database/database.service';
import { UserDto } from './dto/user.req.dto';
import { CreateUserDto } from './dto/user.res.dto'
import { Mapper } from '@/libs/utils/mapper';
import { APP_CONST  } from '@/libs/data/app.const';

@Injectable()
export class UserService {
    constructor(
        private readonly DB: DatabaseService
    ) {}
    async create(body: UserDto) {
        try{
            // password hasing
            const SALT_VALUE = Number(process.env.HASH_SALT_VALUE || APP_CONST.ENV.HASH_SALT_VALUE)
            const salt = await bcrypt.genSalt(SALT_VALUE)
            body.password  = await bcrypt.hash(body.password, salt)

            // insert user to collection
            const { Users } = this.DB.GET_MODEL()
            const data = await this.DB.create(Users, body)
            return Mapper(CreateUserDto, data)
        }catch(error){
            return error
        }
    }
}
