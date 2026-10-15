import { lockoutUntil, MAX_LOGIN_FAILURES } from '../src/services/lockout.service';

describe('account lockout policy', () => {
  it('does not lock before five failures', () => expect(lockoutUntil(MAX_LOGIN_FAILURES - 1)).toBeUndefined());
  it('uses exponential backoff after five failures', () => { const now = new Date('2026-01-01T00:00:00.000Z'); expect(lockoutUntil(5, now)?.getTime()).toBe(now.getTime() + 60_000); expect(lockoutUntil(6, now)?.getTime()).toBe(now.getTime() + 120_000); });
});
