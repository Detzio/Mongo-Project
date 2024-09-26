/**
 * Créer ici le model pour post
 * 
 * Un post doit avoir au minimum : un message, une date, un userId (auteur du post)
 */

const mongoose = require('mongoose');

const Post = mongoose.Schema({
    message: { type: String, required: true },
    date: { type: Date, required: true },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
});

module.exports =  mongoose.model('Post',Post);