import { Router } from 'express'; import { healthRouter } from './health.routes'; import { authRouter } from './auth.routes'; import { rbacRouter } from './rbac.routes';
export const apiRouter=Router(); apiRouter.use('/health',healthRouter); apiRouter.use('/auth',authRouter); apiRouter.use('/rbac',rbacRouter);
