const Category = require('../services/categories.services');

exports.getCategories = async function (req, res) {

    let categories = await Category.getCategories();

    res.status(200).send(categories);
}

exports.getCategoryById = async function (req, res) {

    let category = await Category.getCategoryById(req.params.id);

    res.status(200).send(category);
}

exports.createCategory = async function (req, res) {

    let category = await Category.createCategory(req.body);

    res.status(200).send(category);
}

exports.updateCategory = async function (req, res) {

    let category = await Category.updateCategory(req.params.id, req.body);

    res.status(200).send(category);
}

exports.deleteCategory = async function (req, res) {

    await Category.deleteCategory(req.params.id);

    res.status(200).send({
        msg: "Catégorie supprimé"
    });
}