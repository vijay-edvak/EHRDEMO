# Operations runbook

## Backup and restore

Use Atlas managed backups where available. For an operator-controlled export:

```bash
mongodump --uri="$ADMIN_MONGO_URI" --out=backup/admin-$(date +%F)
mongodump --uri="$MONGO_URI" --out=backup/practice-$(date +%F)
mongorestore --uri="$ADMIN_MONGO_URI" backup/admin-YYYY-MM-DD
mongorestore --uri="$MONGO_URI" backup/practice-YYYY-MM-DD
```

Test restoration in an isolated project before recovery. The Atlas user should have readWrite only on `ehr_admin` and `ehr_practice`; enforce Atlas IP allowlisting and TLS.

## Incident response

1. Disable affected account/session family and preserve audit logs.
2. Verify the audit hash chain.
3. Review security events and AI threat evidence.
4. Notify the Security/Compliance Officer under the organisation's breach procedure.
5. Restore only from a verified backup and record the incident.

Never paste credentials into logs or commit `.env` files.
