// tests/seeds/category-seeds.test.js

const { Category } = require('../../models');
const seedCategories = require('../../seeds/category-seeds');

describe('Category Seeds', () => {
  beforeAll(async () => {
    await seedCategories();
  });

  afterAll(async () => {
    // Add any cleanup tasks after running the tests
  });

  it('should seed categories successfully', async () => {
    const categories = await Category.findAll();
    expect(categories).toHaveLength(5); // Assuming 5 categories are seeded
    // Add more specific assertions based on your expected seeded data
  });
});