// tests/seeds/product-seeds.test.js

const { Product } = require('../../models');
const seedProducts = require('../../seeds/product-seeds');

describe('Product Seeds', () => {
  beforeAll(async () => {
    await seedProducts();
  });

  afterAll(async () => {
    // Add any cleanup tasks after running the tests
  });

  it('should seed products successfully', async () => {
    const products = await Product.findAll();
    expect(products).toHaveLength(5); // Assuming 5 products are seeded
    // Add more specific assertions based on your expected seeded data
  });
});