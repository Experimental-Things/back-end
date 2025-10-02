import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { VALIDATION_MESSAGE } from '@/libs/utils'

export class UserDto {
  @ApiProperty({ required: true })
  @IsString(VALIDATION_MESSAGE.string)
  @IsNotEmpty(VALIDATION_MESSAGE.required)
  first_name: string;

  @ApiProperty({ required: true })
  @IsString(VALIDATION_MESSAGE.string)  
  @IsNotEmpty(VALIDATION_MESSAGE.required)
  last_name: string;

  @ApiProperty({ required: true })
  @IsString(VALIDATION_MESSAGE.string)
  @IsEmail({}, VALIDATION_MESSAGE.email)
  @IsNotEmpty(VALIDATION_MESSAGE.required)
  email: string;

  @ApiProperty({ required: true })
  @IsString(VALIDATION_MESSAGE.string)
  @IsNotEmpty(VALIDATION_MESSAGE.required)
  password: string;
}
