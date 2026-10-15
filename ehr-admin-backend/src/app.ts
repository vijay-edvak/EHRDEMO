import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { env } from './config/env';
import { errorHandler, notFound } from './middleware/errorHandler';
import { requestId } from './middleware/requestId';
import { apiRouter } from './routes';

export const app = express();
app.disable('x-powered-by');
app.use(requestId);
app.use(helmet());
app.use(cors({ origin: env.corsOrigins, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 100, standardHeaders: 'draft-7', legacyHeaders: false }));
app.use(express.json({ limit: '1mb' }));
app.use('/api', apiRouter);
app.use(notFound);
app.use(errorHandler);
