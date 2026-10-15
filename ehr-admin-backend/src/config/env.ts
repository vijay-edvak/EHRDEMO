import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const schema = Joi.object({
  PORT: Joi.number().default(3000),
  CORS_ORIGIN: Joi.string().required(),
  MONGO_URI: Joi.string().required(),
  ADMIN_MONGO_URI: Joi.string().required(),
  JWT_SECRET: Joi.string().min(32).required(),
  REFRESH_SECRET: Joi.string().min(32).required(),
  SESSION_SECRET: Joi.string().min(32).required(),
  EHR_BACKEND_URL: Joi.string().uri().required(),
  EHR_JWT_SECRET: Joi.string().min(32).required(),
  SENDGRID_API_KEY: Joi.string().required(),
}).unknown();

const { error, value } = schema.validate(process.env, { abortEarly: false });
if (error && process.env.NODE_ENV !== 'test') throw new Error(`Invalid environment: ${error.message}`);

export const env = {
  port: Number(value.PORT ?? 3000),
  corsOrigins: String(value.CORS_ORIGIN ?? '').split(',').map((origin: string) => origin.trim()),
};
