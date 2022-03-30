const roles = require('./roles.routes'),
    users = require('./users.routes'),
    posts = require('./posts.routes'),
    categories = require('./categories.routes'),
    refreshToken = require('./refreshToken');

module.exports.router = function (app) {
    
    app.use('/roles', roles);
    app.use('/users', users);
    app.use('/posts', posts);
    app.use('/categories', categories);
    app.get('/refreshToken', refreshToken);
}