const Role = require('../services/roles.services.js');

exports.getRoles = async function (req, res) {

    let roles = await Role.getRoles();
    
    res.status(200).send(roles);
}

exports.createRole = async function(req, res) {

    let role = await Role.createRole(req.body);

    res.status(200).send(role);
}

exports.updateRole = async function(req, res) {
    
    let role = await Role.updateRole(req.body, req.params.id);

    res.status(200).send(role);
}