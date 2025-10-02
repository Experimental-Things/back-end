import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@/libs/config/database/database.service';
import { Mapper, CatchErrorMapper, GeneralUtilService } from '@/libs/utils';


import { LoginReqDto } from './dto/auth.req.dto'
import { LoginResDto } from './dto/auth.res.dto'
@Injectable()
export class AuthService {
    constructor(
        private readonly DB: DatabaseService,
        private readonly GUS: GeneralUtilService
    ){}

    async login(payload: LoginReqDto) {
        try{
            const { Users } = this.DB.GET_MODEL()
            const data = await this.DB.findOne(Users, {
                email: payload.user_id
            })
            
            if(this.GUS.isEmpty(data)) {
                return {

                }
            }else {

            }
            return Mapper(LoginResDto, data)
        }catch(error){
            return CatchErrorMapper(error)
        }
    }

    async logout(){}
}
