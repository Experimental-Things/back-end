import * as env  from 'dotenv'

// core
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication} from '@nestjs/platform-express'

// libs
import Server from '@/libs/core/server';
import { IServerOptions } from '@/libs/types/server'
import { APP_CONST } from '@/libs/data/app.const'

// /modules
import { AppModule } from './app.module';


env.config()
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const serverOptions: IServerOptions = {
    port: Number(process.env.PORT || APP_CONST?.ENV?.DEFAULT_SERVER_PORT),
    enableSwagger: (!!process?.env?.SWAGGER_ENABLE || false)
  }
  const server = new Server(app, serverOptions)
  await server.init()
}
bootstrap();
