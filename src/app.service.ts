import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@/libs/config/database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly DB: DatabaseService){}
  getHello(): string {
    const collections = this.DB.GET_MODEL()
    
    console.log(collections)
    return 'Hello World!';
  }
}
