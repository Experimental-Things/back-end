import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import * as path from 'node:path'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './libs/config/database/database.module';

@Module({
  imports: [
    // setup config module
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.join(__dirname, '..', `.env.${process.env.ENVIRONMENT}`)
    }),
    
    // setup mongoose
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: `${configService.get<string>('DATABASE_URL')}/${configService.get<string>('DB_NAME')}`
      })
    }),

    // load Dasbase module
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
