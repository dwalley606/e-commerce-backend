// tests/seeds/index.test.js

const { sequelize } = require('../../config/connection');
const seedAll = require('../../seeds/index');

describe('Database Seeding', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    // Add any cleanup tasks after running the tests
  });

  it('should seed the database with categories, products, tags, and product tags', async () => {
    await seedAll();
    // Add assertions to check if the database is seeded successfully
    // You can query the database to check if the expected data is seeded
  });
});