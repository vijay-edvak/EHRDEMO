import { calculateEffectivePermissions, canGrant, findSodConflicts } from '../src/rbac/effective-permissions';
import { __rbacCache, invalidateUser } from '../src/services/rbac.service';

describe('effective RBAC permissions', () => {
  it('combines roles, groups, and includes while exclusions win', () => { const result=calculateEffectivePermissions({rolePermissions:[['invoice.read','invoice.create']],groupPermissions:[['audit.read']],includes:['practice.read'],excludes:['invoice.create']}); expect([...result].sort()).toEqual(['audit.read','invoice.read','practice.read']); });
  it('supports super-admin allPermissions', () => expect(calculateEffectivePermissions({rolePermissions:[],groupPermissions:[],includes:[],excludes:['invoice.read'],allPermissions:true}).has('*')).toBe(true));
  it('blocks conflicting maker-checker assignments', () => expect(findSodConflicts(new Set(['invoice.create','invoice.approve']))[0].name).toBe('Invoice maker-checker separation'));
  it('blocks privilege escalation', () => expect(canGrant(new Set(['invoice.read']),new Set(['invoice.read','invoice.export']))).toBe(false));
  it('invalidates a cached user after changes', () => { __rbacCache.cache.set('user-1',{expires:Date.now()+1000,permissions:new Set(['practice.read'])}); invalidateUser('user-1'); expect(__rbacCache.cache.has('user-1')).toBe(false); });
});
