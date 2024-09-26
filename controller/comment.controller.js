const Comment = require("./../model/comment.model");

/**
 * Méthode pour créer un nouveau commentaire
 * @body
 * {
 *     message: <string>,
 *     userId: <string>,
 *     postId: <string>
 * }
 */
exports.create = async () => {
    try{
        let newComment = {
            ...req.body,
            date : new Date()
        }
        let comment = await Comment.create(newComment);
        res.status(201).json(comment);
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Méthode pour modifier un commentaire
 * @param id l'id du commentaire à modifier
 * @body
 * {
 *     message: <string>,
 * }
 */
exports.update = async () => {
    try{
        //TODO
        res.status(200).json({message: "Commentaire mis à jour"});
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Méthode pour supprimer un commentaire
 * @param id l'id du commentaire à supprimer
 */
exports.delete = async () => {
    try{
        let id = req.params.id
        await Comment.findByIdAndDelete(id);
        res.status(200).json({message: "Commentaire supprimé"});
    }catch(e){
        res.status(500).json(e.message);
    }
}