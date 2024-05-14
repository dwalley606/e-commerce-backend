const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags and include associated Product data
  Tag.findAll({
    include: [{ model: Product }]
  })
  .then((tags) => {
    res.json(tags);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id` and include associated Product data
  Tag.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }]
  })
  .then((tag) => {
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      res.status(201).json(tag); // Respond with the created tag
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err); // Respond with an error if creation fails
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      res.json(tag); // Respond with the updated tag
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err); // Respond with an error if update fails
    });
});

router.delete('/:id', (req, res) => {
  // delete a tag by its `id` value
  Tag.destroy({
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
