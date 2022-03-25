const mongoose = require('mongoose'),
    { Schema, ObjectId } = mongoose;

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    user: {
        type: ObjectId,
        required: true
    },
    post: {
        type: ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Comments', CommentSchema);