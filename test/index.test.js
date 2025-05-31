const request = require('supertest');
const { app } = require('../api/index'); // Importamos el "app" para testear

describe('GET /', () => {
  it('debería responder con "Servidor funcionando en Vercel"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Servidor funcionando en Vercel');
  });
});
