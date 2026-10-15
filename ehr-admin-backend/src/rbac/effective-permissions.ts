export interface EffectiveInput { rolePermissions:string[][]; groupPermissions:string[][]; includes:string[]; excludes:string[]; allPermissions?:boolean; }
export function calculateEffectivePermissions(input:EffectiveInput):Set<string>{if(input.allPermissions)return new Set(['*']);const effective=new Set(input.rolePermissions.flat().concat(input.groupPermissions.flat(),input.includes));input.excludes.forEach((code)=>effective.delete(code));return effective;}
export function canGrant(actor:Set<string>,requested:Set<string>):boolean{return actor.has('*')||[...requested].every((code)=>actor.has(code));}
export interface SodRule { name:string; left:string; right:string; }
export const DEFAULT_SOD_RULES:SodRule[]=[{name:'Invoice maker-checker separation',left:'invoice.create',right:'invoice.approve'}];
export function findSodConflicts(codes:Set<string>,rules:SodRule[]=DEFAULT_SOD_RULES):SodRule[]{return rules.filter((rule)=>codes.has(rule.left)&&codes.has(rule.right));}
