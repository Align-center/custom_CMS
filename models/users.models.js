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
        required: true,
        default: '62445ad40762b5d26a96eb4a'
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