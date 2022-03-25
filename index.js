const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    { router } = require('./routes/routes');

//#region Update User with hashing
// User.findOne({email: 'test@mail.fr'}, function (err, user) {

//     if (err)
//         throw err;

//     user.password = '1456';
//     user.save();
// });
//#endregion

//#region Add new user

// var testUser = new User({
//     name: 'Lucas',
//     lastName: 'Frech', 
//     email: 'test@mail.fr',
//     password: '1234'
// });

// testUser.save((err) => {

//     if (err) {
//         throw err;
//     }
// });
//#endregion

//#region findOne example
// User.findOne({name: 'Lucas'}, (err, user) => {

//     if (err) {
//         throw err;
//     }

//     user.comparePassword('1243', function(err, isMatch) {
        
//         if (err)
//             throw err;

//         console.log('1243: ', isMatch);
//     });

//     user.comparePassword('1456', (err, isMatch) => {
        
//         if (err)
//             throw err;

//         console.log('1456: ', isMatch);
//     });
// });
//#endregion

app.use(express.json());

async function start () {

    try {
        
        await mongoose.connect('mongodb://localhost:27017/custom_CMS');

        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });

        router(app);
    } catch (error) {
        
        console.error(error);
        process.exit();
    }
}

start();