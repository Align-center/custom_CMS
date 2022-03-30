const roles = require('./roles.routes'),
    users = require('./users.routes'),
    categories = require('./categories.routes'),
    posts = require('./posts.routes'),
    comments = require('./comments.routes'),
    refreshToken = require('./refreshToken');

module.exports.router = function (app) {
    
    app.use('/roles', roles);
    app.use('/users', users);
    app.use('/posts', posts);
    app.use('/categories', categories);
    app.use('/comments', comments);
    app.get('/refreshToken', refreshToken);
}