import { tokenService } from './token.service';
export async function onUserStatusChanged(userId:string,status:string):Promise<{accessReviewRequired:boolean;tokensRevoked:boolean}>{const leaver=['leaver','deleted'].includes(status);if(leaver)await tokenService.revokeUser(userId);return {accessReviewRequired:true,tokensRevoked:leaver};}
