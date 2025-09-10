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
        if(name) this.Model[name]
        return this.Model
    }
}
