import { Module, Global } from '@nestjs/common';
import { WrapperService } from './wrapper.service';
import { ResponseService } from './response.service';

@Global()
@Module({
  providers: [WrapperService, ResponseService],
  exports: [WrapperService, ResponseService],
})
export class WrapperModule {}
