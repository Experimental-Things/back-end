import { Exclude, Expose, Type } from 'class-transformer';
import { CommonResDto } from '@/libs/common/dto/common.response.dto';


class CreateUserDto {
  @Expose()
  first_name: string;

  @Expose()
  last_name: string;

  @Expose()
  email: string;
}

@Exclude()
export class CreateUserResDto extends CommonResDto {
  @Expose()
  @Type(() => CreateUserDto)
  data: CreateUserDto;
}
