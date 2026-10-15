import crypto from 'node:crypto';
import type { Request, Response } from 'express';
import { env } from '../config/env';
import { authCookieNames, getContext } from '../middleware/auth.middleware';
import { login, resetPassword, enrollMfa, verifyMfaEnrollment, verifyOtp } from '../services/auth.service';
import { tokenService } from '../services/token.service';

const cookieBase={httpOnly:true,secure:env.cookieSecure,sameSite:'strict' as const,path:'/auth'};
const csrfCookie=(res:Response)=>res.cookie(authCookieNames.csrf,crypto.randomBytes(24).toString('hex'),{httpOnly:false,secure:env.cookieSecure,sameSite:'strict',path:'/'});
export async function loginController(req:Request,res:Response){const result=await login(String(req.body.email??''),String(req.body.password??''),getContext(req));if(!result.ok)return res.status(401).json({error:'Invalid email or password.',requestId:req.requestId});res.cookie(authCookieNames.refresh,result.refreshToken,{...cookieBase,maxAge:7*24*60*60*1000});csrfCookie(res);return res.status(200).json({accessToken:result.accessToken,requiresOtp:result.requiresOtp,challengeUserId:result.userId});}
export async function verifyOtpController(req:Request,res:Response){const result=await verifyOtp(String(req.body.userId),String(req.body.otp));if(!result.ok)return res.status(401).json({error:'The verification code is invalid or expired.',requestId:req.requestId});res.cookie(authCookieNames.refresh,result.refreshToken,{...cookieBase,maxAge:7*24*60*60*1000});csrfCookie(res);return res.json({accessToken:result.accessToken});}
export async function refreshController(req:Request,res:Response){const token=req.cookies?.[authCookieNames.refresh];if(!token)return res.status(401).json({error:'Session expired.',requestId:req.requestId});const result=await tokenService.rotate(token);if(!result)return res.status(401).json({error:'Session expired.',requestId:req.requestId});res.cookie(authCookieNames.refresh,result.refreshToken,{...cookieBase,maxAge:7*24*60*60*1000});return res.json({accessToken:result.accessToken});}
export async function logoutController(req:Request,res:Response){const token=req.cookies?.[authCookieNames.refresh];if(token){const result=await tokenService.rotate(token);if(result)await tokenService.revokeUser(result.userId);}res.clearCookie(authCookieNames.refresh,cookieBase);res.clearCookie(authCookieNames.csrf,{path:'/'});return res.status(204).send();}
export async function sessionController(req:Request,res:Response){const token=req.cookies?.[authCookieNames.refresh];if(!token)return res.status(401).json({error:'No active session.'});return res.json({authenticated:tokenService.isActive(token)});}
export async function forgotPasswordController(_req:Request,res:Response){return res.status(202).json({message:'If an account matches, a reset message will be sent.'});}
export async function resetPasswordController(req:Request,res:Response){const result=await resetPassword(String(req.body.userId),String(req.body.password));if(!result.ok)return res.status(400).json({error:'Password does not meet security requirements.',details:result.errors});return res.status(204).send();}
export async function unlockController(_req:Request,res:Response){return res.status(202).json({message:'If the account can be unlocked, an administrator notification will be sent.'});}
export async function enrollMfaController(req:Request,res:Response){const result=await enrollMfa(String(req.body.userId));return res.json(result);}
export async function verifyMfaController(req:Request,res:Response){const valid=await verifyMfaEnrollment(String(req.body.userId),String(req.body.otp));return valid?res.json({verified:true}):res.status(400).json({error:'The verification code is invalid.'});}
