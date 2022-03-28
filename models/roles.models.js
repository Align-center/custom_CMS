const mongoose = require('mongoose'),
    { Schema } = mongoose;

const RoleSchema = new Schema ({
    name: {
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function (role) {

                return /[a-z]/gi.test(role);
            },
            message: 'Le format du nom de role ne doit contenir que des lettres'
        }
    }
});

module.exports = mongoose.model('Role', RoleSchema);