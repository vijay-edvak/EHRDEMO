import { Router } from 'express'; import mongoose from 'mongoose';
export const healthRouter = Router();
healthRouter.get('/', (_req, res) => res.status(200).json({ status: 'ok', service: 'ehr-admin-backend' }));
healthRouter.get('/ready', (_req, res) => res.status(mongoose.connection.readyState === 1 ? 200 : 503).json({ status: mongoose.connection.readyState === 1 ? 'ready' : 'not-ready' }));
