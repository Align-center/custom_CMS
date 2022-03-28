const Role = require('../models/roles.models');

exports.getRoles = async function () {

    return await Role.find();
}

exports.createRole = async function (name) {

    return await Role.create(name)
}

exports.updateRole = async function (name, id) {

    console.log(typeof name.name);

    return await Role.findOneAndUpdate({_id: id}, name, {new: true, runValidators: true});
}

exports.deleteRole = async function (id) {

    return await Role.findOneAndDelete({_id: id});
}