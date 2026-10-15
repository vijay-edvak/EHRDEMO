import http from 'node:http'; import { app } from './app'; import { attachSocket } from './socket';
import { connectDatabases } from './config/database';
import { env } from './config/env'; import { startAccessExpiryJob } from './jobs/access-expiry.job'; import { startAuditRetentionJob } from './jobs/audit-retention.job';

connectDatabases().then(() => { startAccessExpiryJob(); startAuditRetentionJob(); const server=http.createServer(app); attachSocket(server); return server.listen(env.port, () => console.info(`EHR Admin API listening on port ${env.port}`)); }).catch((error: unknown) => { console.error('Database startup failed', error); process.exitCode = 1; });
