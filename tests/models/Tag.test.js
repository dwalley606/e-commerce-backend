// tests/models/Tag.test.js

const { DataTypes } = require('sequelize');
const Tag = require('../../models/Tag');

describe('Tag model', () => {
  it('should create a Tag model with id and tag_name fields', () => {
    const tag = Tag.build({
      id: 1,
      tag_name: 'Test Tag',
    });

    expect(tag.id).toBe(1);
    expect(tag.tag_name).toBe('Test Tag');
    expect(tag).toBeInstanceOf(Tag);
    expect(tag).toHaveProperty('id');
    expect(tag).toHaveProperty('tag_name');
    expect(tag.id).toEqual(expect.any(Number));
    expect(tag.tag_name).toEqual(expect.any(String));
  });
});