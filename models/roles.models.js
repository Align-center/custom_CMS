const mongoose = require('mongoose'),
    { Schema } = mongoose;

const RoleSchema = new Schema ({
    name: {
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function (role) {

                console.log(role);

                return /[a-z]/gi.test(role);
            },
            message: 'NOOOOOON PAS COMME CA'
        }
    }
});

module.exports = mongoose.model('Role', RoleSchema);