// tests/routes/tag-routes.test.js

const request = require('supertest');
const app = require('../../server'); 
const { Tag, Product } = require('../../models');

describe('Tag Routes', () => {
  beforeAll(async () => {
    // Add any setup tasks before running the tests
  });

  afterAll(async () => {
    // Add any cleanup tasks after running the tests
  });

  it('GET /api/tags should return all tags with associated products', async () => {
    const response = await request(app).get('/api/tags');
    expect(response.status).toBe(200);
    // Add more specific assertions based on your expected response
  });

  it('POST /api/tags should create a new tag', async () => {
    const newTag = { tag_name: 'New Tag' };
    const response = await request(app)
      .post('/api/tags')
      .send(newTag);
    expect(response.status).toBe(201);
    // Add more specific assertions based on your expected response
  });

  // Add more test cases for other routes like GET by ID, PUT, DELETE
});