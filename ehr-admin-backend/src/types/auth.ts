export type AuthAction = 'login'|'verify_otp'|'refresh'|'logout'|'forgot_password'|'reset_password'|'unlock'|'mfa_enroll'|'mfa_verify'|'remote_signout';
export type AuthStatus = 'success'|'failure'|'blocked'|'reused';
export interface AdminUser { id:string; email:string; passwordHash:string; passwordHistory:string[]; passwordChangedAt:Date; failedAttempts:number; lockedUntil?:Date; mfaSecret?:string; mfaEnabled:boolean; backupCodeHashes:string[]; roles:string[]; }
export interface Device { id:string; userId:string; fingerprintHash:string; userAgent:string; ip:string; city?:string; firstSeen:Date; lastSeen:Date; trusted:boolean; revokedAt?:Date; }
export interface RefreshSession { id:string; userId:string; familyId:string; tokenHash:string; replacedBy?:string; revokedAt?:Date; expiresAt:Date; }
export interface SecurityEvent { userId?:string; email?:string; score:number; reasons:string[]; ip:string; userAgent:string; city?:string; createdAt:Date; }
