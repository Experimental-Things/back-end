import { Expose } from 'class-transformer';
export class CommonResDto {
  @Expose()
  code: number;
  @Expose()
  message: string;
  @Expose()
  status: boolean;
}
