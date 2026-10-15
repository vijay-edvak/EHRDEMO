jest.mock('../src/services/rbac.service', () => ({ hasPermission: jest.fn().mockResolvedValue(false) }));
import { requirePermission } from '../src/middleware/permission.middleware';

describe('requirePermission', () => {
  it('returns 403 when an authenticated user lacks the route code', async () => { const json=jest.fn(); const res={status:jest.fn().mockReturnValue({json})}; const next=jest.fn(); const req={userId:'user-1',requestId:'req-1'}; await requirePermission('invoice.export')(req as never,res as never,next); expect(res.status).toHaveBeenCalledWith(403); expect(json).toHaveBeenCalledWith(expect.objectContaining({requiredPermissions:['invoice.export']})); expect(next).not.toHaveBeenCalled(); });
});
