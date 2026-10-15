import crypto from 'node:crypto'; import { authenticator } from 'otplib'; import QRCode from 'qrcode'; import bcrypt from 'bcrypt';
export async function createMfaEnrollment(email:string){const secret=authenticator.generateSecret();const uri=authenticator.keyuri(email,'Edvak Admin',secret);return {secret,otpauthUri:uri,qrDataUrl:await QRCode.toDataURL(uri)};}
export async function verifyTotp(secret:string,token:string):Promise<boolean>{return authenticator.verify({secret,token});}
export function createBackupCodes(count=10):string[]{return Array.from({length:count},()=>crypto.randomBytes(5).toString('hex').toUpperCase());}
export async function hashBackupCodes(codes:string[]):Promise<string[]>{return Promise.all(codes.map((code)=>bcrypt.hash(code,12)));}
export async function consumeBackupCode(code:string,hashes:string[]):Promise<{valid:boolean;remaining:string[]}>{for(let i=0;i<hashes.length;i+=1){if(await bcrypt.compare(code,hashes[i])) return {valid:true,remaining:hashes.filter((_,index)=>index!==i)};}return {valid:false,remaining:hashes};}
