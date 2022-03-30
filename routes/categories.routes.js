const express = require('express'),
    router = express.Router(),
    Category = require('../controllers/categories.controlers'),
    auth = require('../middlewares/auth');

router.get('/', auth, Category.getCategories);
router.get('/:id', auth, Category.getCategoryById);
router.post('/', auth, Category.createCategory);
router.put('/:id', auth, Category.updateCategory);
router.delete('/:id', auth, Category.deleteCategory);

module.exports = router;