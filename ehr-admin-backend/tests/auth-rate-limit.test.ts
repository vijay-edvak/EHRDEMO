import request from 'supertest'; import { app } from '../src/app'; import { __rateLimitState } from '../src/middleware/auth-rate-limit';

describe('auth rate limiting', () => { it('limits repeated attempts for one IP and account', async () => { __rateLimitState.attempts.clear(); let response; for(let i=0;i<21;i+=1) response=await request(app).post('/api/auth/forgot-password').send({email:'security@example.com'}); expect(response?.status).toBe(429); }); });
