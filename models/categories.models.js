const mongoose = require('mongoose'),
    { Schema } = mongoose;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Categories', CategorySchema);