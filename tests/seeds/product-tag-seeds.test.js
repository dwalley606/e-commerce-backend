// tests/seeds/product-tag-seeds.test.js

const { ProductTag } = require('../../models');
const seedProductTags = require('../../seeds/product-tag-seeds');

describe('Product Tag Seeds', () => {
  beforeAll(async () => {
    await seedProductTags();
  });

  afterAll(async () => {
    // Add any cleanup tasks after running the tests
  });

  it('should seed product tags successfully', async () => {
    const productTags = await ProductTag.findAll();
    expect(productTags).toHaveLength(12); // Assuming 12 product tags are seeded
    // Add more specific assertions based on your expected seeded data
  });
});