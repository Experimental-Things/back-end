import * as bcrypt from 'bcrypt';
import { APP_CONST } from '../data/app.const';

export async function HashValue(data: string): Promise<string> {
  if (data === null || data === undefined) {
    throw new Error('Data to be hashed cannot be null or undefined');
  }
  const SALT_VALUE = Number(
    process.env.HASH_SALT_VALUE || APP_CONST.ENV.HASH_SALT_VALUE,
  );
  const salt = await bcrypt.genSalt(SALT_VALUE);
  return await bcrypt.hash(data, salt);
}

export async function CompareHash(data: string, hashedData: string): Promise<boolean> {
  if (data === null || data === undefined) {
    throw new Error('Data to be compared cannot be null or undefined');
  } 
  return await bcrypt.compare(data, hashedData);
}