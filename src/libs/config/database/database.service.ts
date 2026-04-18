import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, RootFilterQuery } from 'mongoose';

// Schema and Model
import { Users, type IModelClass } from './schema/index';

@Injectable()
export class DatabaseService {
  private readonly Model: IModelClass;

  // Inject all collections class
  constructor(@InjectModel(Users.name) private Users: Model<Users>) {
    this.Model = {
      Users,
    };
  }

  GET_MODEL(): IModelClass {
    return this.Model;
  }

  async create<T>(
    model: Model<T>,
    data: Partial<T>,
  ): Promise<Record<string, any>> {
    try {
      const resData = (await model.create(data)).toObject();
      return resData;
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  async findOne<T>(
    model: Model<T>,
    filterObj: Partial<RootFilterQuery<T>>,
  ): Promise<Record<string, any> | null> {
    try {
      const doc = await model.findOne(filterObj);
      if (!doc) return null;
      const resData = doc.toObject();
      return resData;
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  async update<T>(
    model: Model<T>,
    filterObj: Partial<RootFilterQuery<T>>,
    data: Record<string, any>,
    options: Record<string, any> = { new: true },
  ): Promise<Record<string, any>> {
    try {
      const resData = await model.updateOne(filterObj, { $set: data }, options);
      return resData;
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }
}
