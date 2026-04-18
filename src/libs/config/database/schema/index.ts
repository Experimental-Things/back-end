import { Model } from 'mongoose';
import { UsersSchema, Users } from './user.schema';
export const COLLECTION_SCHEME = [
  {
    name: Users.name,
    schema: UsersSchema,
  },
];

export interface IModelClass {
  Users: Model<Users>;
}

export { Users };
