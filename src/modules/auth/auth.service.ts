import { HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '@/libs/config/database/database.service';
import { Mapper, CatchErrorMapper, GeneralUtilService, CompareHash } from '@/libs/utils';
import { APP_CONST, APP_MESSAGES } from '@/libs/data'


import { LoginReqDto } from './dto/auth.req.dto'
import { LoginResDto } from './dto/auth.res.dto'
@Injectable()
export class AuthService {
    constructor(
        private readonly DB: DatabaseService,
        private readonly GUS: GeneralUtilService
    ){}

    async login(payload: LoginReqDto) {
        let serviceResponse = APP_CONST?.BASE_RESPONSE
        try{
            const { Users } = this.DB.GET_MODEL()
            const data = await this.DB.findOne(Users, {
                email: payload.user_id
            })
            
            if(this.GUS.isEmpty(data)) {
                serviceResponse = {
                    ...serviceResponse,
                    message: APP_MESSAGES?.MODULE?.AUTH?.NO_USER_FOUND,
                    code: HttpStatus.NOT_FOUND,
                    statusCode: HttpStatus.NOT_FOUND,
                    status: false,
                    data: {}
                }
            }else {
                // logic to compare password
                const isValidPassword = await CompareHash(payload?.password, data?.password)
                serviceResponse.code = isValidPassword ?  HttpStatus?.OK : HttpStatus?.BAD_REQUEST
                serviceResponse.statusCode = isValidPassword ? HttpStatus?.OK : HttpStatus?.BAD_REQUEST
                serviceResponse.status = isValidPassword
                serviceResponse.message = isValidPassword ? APP_MESSAGES?.GENERAL_MESSAGE?.SUCCESS : APP_MESSAGES?.MODULE?.AUTH?.PASSOWRD_INCORRECT
                serviceResponse.data = isValidPassword ? data : {}
                if(isValidPassword){
                    // token logic
                }

            }
            return Mapper(LoginResDto, serviceResponse)
        }catch(error){
            return CatchErrorMapper(error)
        }
    }

    async logout(){}
}
