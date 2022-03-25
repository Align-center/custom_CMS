const Role = require('../services/roles.services.js');

exports.getRoles = async function (req, res) {

    let roles = await Role.getRoles();
    
    res.status(200).send(roles);
}