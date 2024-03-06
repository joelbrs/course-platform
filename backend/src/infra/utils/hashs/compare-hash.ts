import { timingSafeEqual } from 'crypto';

export function compareHash(hash1: string, hash2: string) {
  console.log(hash1, hash2);
  return timingSafeEqual(Buffer.from(hash1), Buffer.from(hash2));
}
