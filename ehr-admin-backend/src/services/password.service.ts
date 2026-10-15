import bcrypt from 'bcrypt';
const COMMON = new Set(['password','password123','qwerty123','letmein','welcome123','admin123']);
export const PASSWORD_COST=12;
export function validatePasswordStrength(password:string):string[] { const errors:string[]=[]; if(password.length<12) errors.push('at least 12 characters'); if(!/[A-Z]/.test(password)) errors.push('an uppercase letter'); if(!/[a-z]/.test(password)) errors.push('a lowercase letter'); if(!/[0-9]/.test(password)) errors.push('a number'); if(!/[^A-Za-z0-9]/.test(password)) errors.push('a symbol'); if(COMMON.has(password.toLowerCase())) errors.push('a password not present on the common-password blocklist'); return errors; }
export async function hashPassword(password:string):Promise<string>{return bcrypt.hash(password,PASSWORD_COST);}
export async function verifyPassword(password:string,hash:string):Promise<boolean>{return bcrypt.compare(password,hash);}
export async function isPasswordBreached(password:string):Promise<boolean>{ return COMMON.has(password.toLowerCase()); }
