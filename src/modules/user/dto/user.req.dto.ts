import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ required: true })
  @IsString()
  first_name: string;

  @ApiProperty({ required: true })
  @IsString()
  last_name: string;

  @ApiProperty({ required: true })
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;
}
