import { __tokenTestState, tokenService } from '../src/services/token.service';

describe('refresh token rotation', () => {
  beforeEach(() => __tokenTestState.sessions.clear());
  it('rotates a token and rejects reuse while revoking its family', async () => { const first=await tokenService.issueRefresh('user-1'); const second=await tokenService.rotate(first.token); expect(second?.userId).toBe('user-1'); expect(second?.refreshToken).not.toBe(first.token); expect(await tokenService.rotate(first.token)).toBeNull(); const family=[...__tokenTestState.sessions.values()].filter((item)=>item.familyId===first.session.familyId); expect(family.every((item)=>item.revokedAt)).toBe(true); });
});
