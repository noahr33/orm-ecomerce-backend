const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [
        { model: Product }
      ]
    })
    res.json(allTags)
  } catch (err) {
    res.status(500).json(err)
  }
});

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
