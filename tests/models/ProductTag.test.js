const { DataTypes } = require('sequelize');
const { ProductTag } = require('../models');

describe('ProductTag Model', () => {
  test('should have the required properties', () => {
    const attributes = ProductTag.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });

    // Sample data for testing
    const sampleProductTag = { id: 1, product_id: 1, tag_id: 1 };

    // Test the properties
    expect(attributes.id.type).toBe(DataTypes.INTEGER);
    expect(attributes.product_id.type).toBe(DataTypes.INTEGER);
    expect(attributes.tag_id.type).toBe(DataTypes.INTEGER);

    // Test sample data
    expect(sampleProductTag.id).toBe(1);
    expect(sampleProductTag.product_id).toBe(1);
    expect(sampleProductTag.tag_id).toBe(1);
  });

  // Add more test cases as needed
});