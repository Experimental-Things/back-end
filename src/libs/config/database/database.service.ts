import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

// Schema and Model
import * as ModelCalss from './schema/index'
import {type IModelClass } from './schema/index'

@Injectable()
export class DatabaseService {
    private readonly Model: IModelClass

    // Inject all collections class
    constructor(
        @InjectModel(ModelCalss.Users.name) private Users: Model<ModelCalss.Users>
    ){
        this.Model = {
            Users
        }
    }

    GET_MODEL(name?: string): IModelClass {
        if(name) return this.Model[name]
        return this.Model
    }

    async create<T>(model: Model<T>, data: Partial<T>): Promise<Record<string, any>> {
       return new Promise(async (resolve: (value: Record<string, unknown> | any) => void, reject: (error: Error | any) => void) => {
        try{
            const response = (await model.create(data)).toObject()
            resolve(response)
        }catch(error){
            reject(error)
        }
       })
    }
}
