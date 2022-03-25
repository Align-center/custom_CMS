const Role = require('../models/roles.models');

exports.getRoles = async function () {

    return await Role.find();
}