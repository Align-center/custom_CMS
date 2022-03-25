const roles = require('./roles.routes.js');

module.exports.router = function (app) {
    
    app.use('/roles', roles);
}