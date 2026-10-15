export const MAX_LOGIN_FAILURES = 5;
export function lockoutUntil(failedAttempts: number, now = new Date()): Date | undefined {
  if (failedAttempts < MAX_LOGIN_FAILURES) return undefined;
  const minutes = Math.min(60, 2 ** (failedAttempts - MAX_LOGIN_FAILURES));
  return new Date(now.getTime() + minutes * 60 * 1000);
}
