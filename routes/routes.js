const roles = require('./roles.routes'),
    users = require('./users.routes'),
    posts = require('./posts.routes'),
    refreshToken = require('./refreshToken')
    Cate = require('../models/categories.models');

module.exports.router = function (app) {
    
    app.use('/roles', roles);
    app.use('/users', users);
    app.use('/posts', posts);
    app.get('/refreshToken', refreshToken);
}