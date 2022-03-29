const mongoose = require('mongoose'),
    { Schema, ObjectId } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'Users',
        required: true
    },
    categories: [{
        type: ObjectId,
        ref: 'Categories',
        required: true,
        validate: {
            validator: function () {
                
                if (this.categories.length > 2) {

                    return false;
                }
            },
            message: 'Un post peut avoir un maximum de 2 catégories' 
        },
    }],
    comments: [{
        type: ObjectId,
        ref: 'Comments'
    }] 
});

module.exports = mongoose.model('Posts', PostSchema);