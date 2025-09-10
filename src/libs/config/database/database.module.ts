import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MongooseModule } from '@nestjs/mongoose'
import { COLLECTION_SCHEME } from './schema/index'

@Global()
@Module({
  imports: [
    MongooseModule.forFeature(COLLECTION_SCHEME.map(({name, schema}) => ({ name, schema })))
  ],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
