import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { type Response } from 'express';
import { ResponseService } from './response.service';

@Injectable()
export class WrapperService {
    constructor(
        private readonly responseService: ResponseService
    ){}
    /**
     * 
     * @param response - Response Object from express[Nest] 
     * @param serviceInstance - Current service instance
     * @param method - service method
     * @param methodArgs - arguments for service methods
     * @returns 
     */
    async Service<T>(response:Response, serviceInstance: T, method: Function, ...methodArgs: any[] ){
        try{
            const responseData = await method.bind(serviceInstance)(...methodArgs)
            
            return this.responseService.success(
                response, 
                responseData?.["data"],
                responseData?.["code"],
                responseData?.["status"],
                responseData?.["message"]
            )
        }catch(error: any) {
            throw new HttpException({ message: error.message, error: JSON.stringify(error) }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
