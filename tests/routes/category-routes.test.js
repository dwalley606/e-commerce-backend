// tests/routes/category-routes.test.js

const request = require('supertest');
const app = require('../../server');
const { Category } = require('../../models');

describe('Category Routes', () => {
  beforeAll(async () => {
    // Add any setup tasks before running the tests
  });

  afterAll(async () => {
    // Add any cleanup tasks after running the tests
  });

  it('GET /api/categories should return all categories with associated products', async () => {
    const response = await request(app).get('/api/categories');
    expect(response.status).toBe(200);
    // Add more specific assertions based on your expected response
  });

  it('POST /api/categories should create a new category', async () => {
    const newCategory = { category_name: 'New Category' };
    const response = await request(app)
      .post('/api/categories')
      .send(newCategory);
    expect(response.status).toBe(201);
    // Add more specific assertions based on your expected response
  });

  // Add more test cases for other routes like GET by ID, PUT, DELETE
});