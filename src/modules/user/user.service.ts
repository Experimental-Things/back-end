import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@/libs/config/database/database.service';
import { UserDto } from './dto/user.req.dto';
import { CreateUserDto } from './dto/user.res.dto'
import { Mapper } from '@/libs/utils/mapper';

@Injectable()
export class UserService {
    constructor(
        private readonly DB: DatabaseService
    ) {}
    async create(body: UserDto) {
        try{
            const { Users } = this.DB.GET_MODEL()
            const data = await this.DB.create(Users, body)
            return Mapper(CreateUserDto, data)
        }catch(error){
            return error
        }
    }
}
