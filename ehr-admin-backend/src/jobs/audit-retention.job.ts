import cron from 'node-cron'; import { archiveAuditLogs } from '../services/audit-retention.service';
export function startAuditRetentionJob(){return cron.schedule('0 2 1 * *',async()=>{try{const count=await archiveAuditLogs();if(count)console.info(JSON.stringify({job:'audit-retention',archived:count}));}catch(error){console.error('Audit retention job failed',error);}});}
