import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@/libs/config/database/database.service';
import { Mapper } from '@/libs/utils/mapper';

import { LoginDto } from './dto/auth.res.dto'

@Injectable()
export class AuthService {
    constructor(
        private readonly DB: DatabaseService
    ){}

    async login(){
        try{
            const { Users } = this.DB.GET_MODEL()
            const data = await this.DB.findOne(Users, {})
            return Mapper(LoginDto, data)
        }catch(error){
            return error
        }
    }

    async logout(){}
}
