import { IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { VALIDATION_MESSAGE } from '@/libs/utils'

export class LoginReqDto {
    @ApiProperty({ required: true })
    @IsString(VALIDATION_MESSAGE.string)
    @IsNotEmpty(VALIDATION_MESSAGE.required)
    user_id: string

    @ApiProperty({ required: true })
    @IsString(VALIDATION_MESSAGE.string)
    @IsNotEmpty(VALIDATION_MESSAGE.required)
    password: string
}