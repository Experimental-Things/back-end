import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common'

@Catch(HttpException)
export default class GlobalHttpExceptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        throw new Error('Method not implemented.');
    }
}