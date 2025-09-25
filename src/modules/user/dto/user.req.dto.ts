import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { VALIDATION_MESSAGE } from '@/libs/utils/dto.validation'

export class UserDto {
  @ApiProperty({ required: true })
  @IsString(VALIDATION_MESSAGE.string)
  first_name: string;

  @ApiProperty({ required: true })
  @IsString(VALIDATION_MESSAGE.string)
  last_name: string;

  @ApiProperty({ required: true })
  @IsString(VALIDATION_MESSAGE.string)
  @IsEmail({}, VALIDATION_MESSAGE.email)
  email: string;

  @ApiProperty({ required: true })
  @IsString(VALIDATION_MESSAGE.string)
  password: string;
}
