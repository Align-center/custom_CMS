const mongoose = require('mongoose'),
    { Schema, ObjectId } = mongoose,
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: true,
        validate: [validateEmail, 'Veuillez utiliser une adresse e-mail valide.']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: ObjectId,
        ref: 'Role',
        required: true
    },
    favoritePosts: [{
        type: ObjectId,
        ref: 'Posts'
    }]
});

userSchema.pre('save', function (next){
    var user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {

        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {

            if (err) {

                return next(err);
            }

            user.password = hash;
            next();
        });
    })
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {

    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {

        if (err) {
            return cb(err);
        }

        cb(null, isMatch);
    });
}

module.exports = mongoose.model('User', userSchema);

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