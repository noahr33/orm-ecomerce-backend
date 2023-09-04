const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories with associated Products
router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [
        { model: Product }
      ]
    })
    res.json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
});

// find one category by its `id` value with associated Products
router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [
        { model: Product }
      ]
    })
    res.json(oneCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.json(newCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id
      },
      raw: true,
    })
    res.json(updatedCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const result = await Category.destroy({
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
