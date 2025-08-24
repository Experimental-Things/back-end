import * as env  from 'dotenv'

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Server from '@/libs/server/server'


env.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = new Server(app)
  await server.init({
    ENV: process.env
  })
}
bootstrap();
