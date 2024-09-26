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
// exports.create = async (req, res) => {
//     const { message, userId, postId } = req.body;
//     try {
//         const newComment = new Comment({
//             message,
//             date: new Date(),
//             userId,
//             postId
//         });
//         await newComment.save();
//         res.status(201).json(newComment);
//     } catch (e) {
//         res.status(500).json({ message: e.message });
//     }
// }

/**
 * Méthode pour modifier un commentaire
 * @param id l'id du commentaire à modifier
 * @body
 * {
 *     message: <string>,
 * }
 */
exports.update = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    try {
        const updatedComment = await Comment.findByIdAndUpdate(id, { message }, { new: true });
        if (!updatedComment) {
            return res.status(404).json({ message: "Commentaire non trouvé" });
        }
        res.status(200).json({ message: "Commentaire mis à jour", updatedComment });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

/**
 * Méthode pour supprimer un commentaire
 * @param id l'id du commentaire à supprimer
 */
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.status(404).json({ message: "Commentaire non trouvé" });
        }
        res.status(200).json({ message: "Commentaire supprimé" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}