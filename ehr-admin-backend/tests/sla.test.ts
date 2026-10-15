import { canTransition } from '../src/workflow/state-machine';
describe('SLA governance',()=>{it('supports expiry as a terminal transition',()=>{expect(canTransition('pending','expired')).toBe(true);expect(canTransition('expired','pending')).toBe(false);});});
