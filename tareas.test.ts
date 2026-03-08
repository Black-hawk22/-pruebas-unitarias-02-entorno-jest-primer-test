import request from 'supertest';
import app from './app';

describe('GET /tareas', () => {
  it('debe responder con status 200', async () => {
    const response = await request(app).get('/tareas');
    expect(response.status).toBe(200);
  });

  it('debe responder con un arreglo', async () => {
    const response = await request(app).get('/tareas');
    expect(Array.isArray(response.body)).toBe(true);
  });
});
```