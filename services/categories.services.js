const Category = require('../models/categories.models');

// Get all, by id

exports.getCategories = async function () {

    return await Category.find();
}

exports.getCategoryById = async function (id) {

    return await Category.findById(id);
}

// create

exports.createCategory = async function (categoryObject) {

    return await Category.create(categoryObject);
}

// update

exports.updateCategory = async function (id, categoryObject) {

    return await Category.findByIdAndUpdate(id, categoryObject);
}

// delete

exports.deleteCategory = async function (id) {

    return await Category.findByIdAndDelete(id);
}