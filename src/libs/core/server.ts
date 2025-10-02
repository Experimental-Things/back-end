import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

import { IServerOptions } from '@/libs/types/server'
import { APP_CONST } from '@/libs/data/app.const'

export default class Server {
    App:INestApplication<any>
    options: IServerOptions
    constructor(app: INestApplication<any>, options: IServerOptions) {
        this.App = app
        this.options = options
    }

    async init(){
        const PORT = this.options.port ?? APP_CONST?.ENV?.DEFAULT_SERVER_PORT

        // Enable global Pipe for Dto validations
        this.App.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
                transform: true
            })
        )
        // Swagger API docs
        const swaggerConfig: any = new DocumentBuilder().setTitle("API Docs").setDescription("API Docs").setVersion("1.0.0")
        const document = SwaggerModule.createDocument(this.App, swaggerConfig)
        SwaggerModule.setup("docs", this.App, document)

        // listen and log message finally
        this.App.listen(PORT, () => {
            console.log(`App up & running on port ${PORT}`)
        })



    }
}
