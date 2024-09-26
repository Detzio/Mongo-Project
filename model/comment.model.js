/**
 * Créer ici le model pour post
 * 
 * Un post doit avoir au minimum : un message, une date, un userId (auteur du post) et un postId
 */

const mongoose = require('mongoose');

const Comment = mongoose.Schema({
    message: { type: String, required: true },
    date: { type: Date, required: true },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    postId: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true},
});

module.exports =  mongoose.model('Comment',Comment);