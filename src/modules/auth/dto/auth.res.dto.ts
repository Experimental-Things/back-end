import { CommonResDto } from '@/libs/common/dto/common.response.dto';
import { Exclude, Expose, Type } from 'class-transformer'
class LoginData {
    @Expose()
    first_name: string;

    @Expose()
    last_name: string
}

export class LoginResDto extends CommonResDto {

    @Expose() 
    @Type(() => LoginData)
    data: LoginData
}