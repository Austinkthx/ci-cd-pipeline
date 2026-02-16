const request = require('supertest');
   const app = require('./http-server');

   test('Main page should return Hello World', async () => {
     const response = await request(app).get('/');
     expect(response.text).toBe('Hello World');
   });