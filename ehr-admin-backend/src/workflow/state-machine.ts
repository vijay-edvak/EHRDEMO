export type WorkflowState='draft'|'pending'|'approved'|'rejected'|'cancelled'|'expired';
const transitions:Record<WorkflowState,WorkflowState[]>={draft:['pending','cancelled'],pending:['approved','rejected','cancelled','expired'],approved:[],rejected:[],cancelled:[],expired:[]};
export function canTransition(from:WorkflowState,to:WorkflowState):boolean{return transitions[from].includes(to);}
export function assertTransition(from:WorkflowState,to:WorkflowState,reason?:string):void{if(!canTransition(from,to))throw new Error('INVALID_WORKFLOW_TRANSITION');if(to==='rejected'&&!reason?.trim())throw new Error('REJECTION_REASON_REQUIRED');}
