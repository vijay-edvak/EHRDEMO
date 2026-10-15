import { scoreRisk } from '../src/services/risk.service';

describe('risk scoring', () => {
  it('allows low-risk known-device activity', () => expect(scoreRisk({ newDevice:false, newBrowser:false, newCityOrIp:false, repeatedFailures:0, hour:12, impossibleTravel:false }).decision).toBe('allow'));
  it('requires OTP in the medium band', () => expect(scoreRisk({ newDevice:true, newBrowser:true, newCityOrIp:true, repeatedFailures:0, hour:12, impossibleTravel:false }).decision).toBe('otp'));
  it('blocks high-risk impossible travel', () => { const result=scoreRisk({ newDevice:true, newBrowser:true, newCityOrIp:true, repeatedFailures:3, hour:2, impossibleTravel:true }); expect(result.score).toBe(100); expect(result.decision).toBe('block'); });
});
