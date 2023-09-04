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
router.get('/:id', async (req, res) => {
  // be sure to include its associated Product data
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product }
      ]
    })
    res.json(oneTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body)
    res.json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const id = req.params.id
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id
      },
      raw: true,
    })
    res.json(updatedTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const id = req.params.id
  try {
    const result = await Tag.destroy({
      where: {
        id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
