import type { RequestHandler } from 'express';
const attempts=new Map<string,{count:number;reset:number}>();
export const authRateLimit:RequestHandler=(req,res,next)=>{const account=typeof req.body?.email==='string'?req.body.email.toLowerCase():'anonymous';const key=`${req.ip}:${account}`;const now=Date.now();const current=attempts.get(key);if(!current||current.reset<now){attempts.set(key,{count:1,reset:now+15*60*1000});return next();}current.count+=1;if(current.count>20)return res.status(429).json({error:'Too many requests. Try again later.',requestId:req.requestId});return next();};
export const __rateLimitState={attempts};
