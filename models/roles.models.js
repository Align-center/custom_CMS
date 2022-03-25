const mongoose = require('mongoose'),
    { Schema } = mongoose;

const RoleSchema = new Schema ({
    name: {
        type: String, 
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Role', RoleSchema);