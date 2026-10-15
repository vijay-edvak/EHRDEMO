import request from 'supertest';
import { app } from '../src/app';

describe('health endpoint', () => {
  it('returns service health and a request id', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.headers['x-request-id']).toBeDefined();
  });
});
