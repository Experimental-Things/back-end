import {Global, Injectable } from '@nestjs/common'

@Global()
@Injectable()
export class GeneralUtilService {
    isEmpty(data: any): boolean {
        if(data === null || data === undefined) return true
        if(typeof data === 'string' && data?.trim() === '') return true
        if(!Array.isArray(data) && typeof data === 'object' && Object.keys(data)?.length === 0) return true
        if(Array.isArray(data) && data?.length === 0) return true
        return false

    }   
}