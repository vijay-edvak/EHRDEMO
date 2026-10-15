export interface SafeAiPrompt{module:string;roleNames:string[];permissionCodes:string[];counts:Record<string,number>;question?:string;}
export interface AiProvider{summarize(prompt:SafeAiPrompt):Promise<string>;}
export class LocalRuleProvider implements AiProvider{async summarize(prompt:SafeAiPrompt){return `${prompt.module} summary based on ${prompt.permissionCodes.length} pseudonymised permission codes and ${Object.values(prompt.counts).reduce((sum,value)=>sum+value,0)} aggregate events.`;}}
