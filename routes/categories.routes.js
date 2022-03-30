const express = require('express'),
    router = express.Router(),
    Category = require('../controllers/categories.controlers'),
    auth = require('../middlewares/auth');

router.get('/', Category.getCategories);
router.get('/:id', Category.getCategoryById);
router.post('/', Category.createCategory);
router.put('/:id', Category.updateCategory);
router.delete('/:id', Category.deleteCategory);

module.exports = router;