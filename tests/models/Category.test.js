// tests/models/Category.test.js

const { DataTypes } = require('sequelize');
const Category = require('../../models/Category');

describe('Category model', () => {
  it('should create a Category model with id and category_name fields', () => {
    const category = Category.build({
      id: 1,
      category_name: 'Test Category',
    });

    expect(category.id).toBe(1);
    expect(category.category_name).toBe('Test Category');
    expect(category).toBeInstanceOf(Category);
    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('category_name');
    expect(category.id).toEqual(expect.any(Number));
    expect(category.category_name).toEqual(expect.any(String));
  });
});