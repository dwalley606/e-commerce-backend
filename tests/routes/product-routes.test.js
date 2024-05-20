// tests/routes/product-routes.test.js

const request = require('supertest');
const app = require('../../server'); // Assuming your Express app is exported from app.js
const { Product, Category, Tag, ProductTag } = require('../../models');

describe('Product Routes', () => {
  beforeAll(async () => {
    // Add any setup tasks before running the tests
  });

  afterAll(async () => {
    // Add any cleanup tasks after running the tests
  });

  it('GET /api/products should return all products with categories and tags', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    // Add more specific assertions based on your expected response
  });

  it('POST /api/products should create a new product with tags', async () => {
    const newProduct = {
      product_name: 'New Product',
      price: 100.00,
      stock: 5,
      tagIds: [1, 2, 3],
    };
    const response = await request(app)
      .post('/api/products')
      .send(newProduct);
    expect(response.status).toBe(200);
    // Add more specific assertions based on your expected response
  });

  // Add more test cases for other routes like GET by ID, PUT, DELETE
});