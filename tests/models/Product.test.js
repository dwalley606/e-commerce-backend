// tests/models/Product.test.js

const { DataTypes } = require('sequelize');
const Product = require('../../models/Product');

describe('Product model', () => {
  it('should create a Product model with id, product_name, price, stock, and category_id fields', () => {
    const product = Product.build({
      id: 1,
      product_name: 'Test Product',
      price: 100.00,
      stock: 5,
      category_id: 1,
    });

    expect(product.id).toBe(1);
    expect(product.product_name).toBe('Test Product');
    expect(product.price).toBe(100.00);
    expect(product.stock).toBe(5);
    expect(product.category_id).toBe(1);
    expect(product).toBeInstanceOf(Product);
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('product_name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('stock');
    expect(product).toHaveProperty('category_id');
    expect(product.id).toEqual(expect.any(Number));
    expect(product.product_name).toEqual(expect.any(String));
    expect(product.price).toEqual(expect.any(Number));
    expect(product.stock).toEqual(expect.any(Number));
    expect(product.category_id).toEqual(expect.any(Number));
  });
});