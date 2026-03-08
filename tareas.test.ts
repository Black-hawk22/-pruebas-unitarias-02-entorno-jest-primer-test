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

describe('POST /tareas', () => {
  it('caso feliz: debe crear una tarea y responder con status 201', async () => {
    const response = await request(app)
      .post('/tareas')
      .send({ titulo: 'Tarea de prueba' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('titulo', 'Tarea de prueba');
  });

  it('caso error: debe responder con status 400 si no se envía título', async () => {
    const response = await request(app)
      .post('/tareas')
      .send({});
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});