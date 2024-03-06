import { z } from 'zod';
import 'dotenv/config';

const env_schema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
});

const _env = env_schema.safeParse(process.env);

if (!_env.success) {
  console.error('Invalid environment variables.');
  throw new Error('Invalid environment variables.');
}

export const env = _env.data;
