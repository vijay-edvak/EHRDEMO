import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();
const schema = Joi.object({
  NODE_ENV: Joi.string().valid('development','test','production').default('development'), PORT: Joi.number().default(3000), CORS_ORIGIN: Joi.string().required(), MONGO_URI: Joi.string().required(), ADMIN_MONGO_URI: Joi.string().required(), JWT_SECRET: Joi.string().min(32).required(), REFRESH_SECRET: Joi.string().min(32).required(), SESSION_SECRET: Joi.string().min(32).required(), EHR_BACKEND_URL: Joi.string().uri().required(), EHR_JWT_SECRET: Joi.string().min(32).required(), SENDGRID_API_KEY: Joi.string().required(), ACCESS_TOKEN_TTL: Joi.string().default('10m'), REFRESH_TOKEN_TTL: Joi.string().default('7d'), PASSWORD_EXPIRY_DAYS: Joi.number().default(90), AUTH_COOKIE_SECURE: Joi.boolean().truthy('true').falsy('false').default(false),
}).unknown();
const { error, value } = schema.validate(process.env, { abortEarly:false });
if (error && process.env.NODE_ENV !== 'test') throw new Error(`Invalid environment: ${error.message}`);
export const env = { ehrBackendUrl:String(value.EHR_BACKEND_URL ?? ''), ehrJwtSecret:String(value.EHR_JWT_SECRET ?? 'test-darwin-secret'), nodeEnv:String(value.NODE_ENV ?? 'development'), port:Number(value.PORT ?? 3000), corsOrigins:String(value.CORS_ORIGIN ?? '').split(',').map((origin:string)=>origin.trim()), mongoUri:String(value.MONGO_URI ?? ''), adminMongoUri:String(value.ADMIN_MONGO_URI ?? ''), jwtSecret:String(value.JWT_SECRET ?? 'test-access-secret'), refreshSecret:String(value.REFRESH_SECRET ?? 'test-refresh-secret'), sessionSecret:String(value.SESSION_SECRET ?? 'test-session-secret'), accessTtl:String(value.ACCESS_TOKEN_TTL ?? '10m'), refreshTtl:String(value.REFRESH_TOKEN_TTL ?? '7d'), passwordExpiryDays:Number(value.PASSWORD_EXPIRY_DAYS ?? 90), cookieSecure:Boolean(value.AUTH_COOKIE_SECURE ?? false) } as const;
