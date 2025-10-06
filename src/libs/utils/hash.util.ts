import * as bcrypt from 'bcrypt';
import { APP_MESSAGES, APP_CONST} from '@/libs/data'

export async function HashValue(data: string): Promise<string> {
  if (data === null || data === undefined) {
    throw new Error(APP_MESSAGES?.UTILS?.HASH_FN?.EMPTY_VALUE);
  }
  const SALT_VALUE = Number(
    process.env.HASH_SALT_VALUE || APP_CONST.ENV.HASH_SALT_VALUE,
  );
  const salt = await bcrypt.genSalt(SALT_VALUE);
  return await bcrypt.hash(data, salt);
}

export async function CompareHash(data: string, hashedData: string): Promise<boolean> {
  if (data === null || data === undefined) {
    throw new Error(APP_MESSAGES?.UTILS?.HASH_FN?.EMPTY_VALUE);
  } 
  return await bcrypt.compare(data, hashedData);
}