const Role = require('../models/roles.models');

exports.getRoles = async function () {

    return await Role.find();
}

exports.getRoleByName = async function (name) {

    return await Role.findOne({name: name});
}

exports.createRole = async function (name) {

    return await Role.create(name)
}

exports.updateRole = async function (name, id) {

    return await Role.findOneAndUpdate({_id: id}, name, {new: true, runValidators: true});
}

exports.deleteRole = async function (id) {

    return await Role.findOneAndDelete({_id: id});
}