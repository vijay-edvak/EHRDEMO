import { validatePasswordStrength } from '../src/services/password.service';

describe('password policy', () => { it('requires length and character classes', () => expect(validatePasswordStrength('short')).toEqual(expect.arrayContaining(['at least 12 characters','an uppercase letter','a number','a symbol']))); it('rejects common breached passwords', () => expect(validatePasswordStrength('password123')).toContain('a password not present on the common-password blocklist')); });
