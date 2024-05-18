// tests/models/index.test.js

const models = require('../../models/index');

describe('Models and Associations', () => {
  it('should export the Product, Category, Tag, and ProductTag models with associations', () => {
    expect(models).toHaveProperty('Product');
    expect(models).toHaveProperty('Category');
    expect(models).toHaveProperty('Tag');
    expect(models).toHaveProperty('ProductTag');

    const { Product, Category, Tag, ProductTag } = models;

    expect(Product.associations.Category).toBeDefined();
    expect(Category.associations.Products).toBeDefined();
    expect(Product.associations.Tags).toBeDefined();
    expect(Tag.associations.Products).toBeDefined();
  });
});