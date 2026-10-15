import { app } from './app';
import { connectDatabases } from './config/database';
import { env } from './config/env'; import { startAccessExpiryJob } from './jobs/access-expiry.job';

connectDatabases().then(() => { startAccessExpiryJob(); return app.listen(env.port, () => console.info(`EHR Admin API listening on port ${env.port}`)); }).catch((error: unknown) => { console.error('Database startup failed', error); process.exitCode = 1; });
