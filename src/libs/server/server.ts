import { INestApplication } from '@nestjs/common';

export default class Server {
    App:INestApplication<any>
    constructor(app: INestApplication<any>) {
        this.App = app
    }

    async init(options?: Record<string, any>){
        const PORT = options?.ENV?.PORT ?? 3000
        return this.App.listen(PORT, () => {
            console.log(`App up & running on port ${PORT}`)
        })
    }
}
