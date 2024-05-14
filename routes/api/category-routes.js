const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories and include associated Products
  Category.findAll({
    include: [{ model: Product }]
  })
  .then((categories) => {
    res.json(categories);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value and include associated Products
  Category.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }]
  })
  .then((category) => {
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category) => {
      res.status(201).json(category); // Respond with the created category
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err); // Respond with an error if creation fails
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      res.json(category); // Respond with the updated category
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err); // Respond with an error if update fails
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(204).end(); // Respond with a success status code
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err); // Respond with an error if deletion fails
    });
});

module.exports = router;
