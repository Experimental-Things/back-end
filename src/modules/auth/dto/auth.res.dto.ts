import { CommonResDto } from '@/libs/common/dto/common.response.dto';
import { Exclude, Expose, Type } from 'class-transformer'
class LoginData {
    @Expose()
    first_name: string;

    @Expose()
    last_name: string;

    @Expose()
    email: string;

    @Expose()
    access_token: string
}

export class LoginResDto extends CommonResDto {

    @Expose() 
    @Type(() => LoginData)
    data: LoginData
}