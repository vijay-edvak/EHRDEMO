import { prorate, verifyWebhookSignature } from '../src/services/billing.service';
describe('billing',()=>{it('calculates integer minor-unit proration',()=>expect(prorate(10000,20000,15,30)).toBe(5000));it('rejects invalid webhook signature',()=>expect(verifyWebhookSignature('payload','bad','secret')).toBe(false));});
