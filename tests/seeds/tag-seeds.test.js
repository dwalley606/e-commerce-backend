// tests/seeds/tag-seeds.test.js

const { Tag } = require('../../models');
const seedTags = require('../../seeds/tag-seeds');

describe('Tag Seeds', () => {
  beforeAll(async () => {
    await seedTags();
  });

  afterAll(async () => {
    // Add any cleanup tasks after running the tests
  });

  it('should seed tags successfully', async () => {
    const tags = await Tag.findAll();
    expect(tags).toHaveLength(8); // Assuming 8 tags are seeded
    // Add more specific assertions based on your expected seeded data
  });
});