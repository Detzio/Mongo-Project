const Post = require("./../model/post.model");
const Comment = require("./../model/comment.model");
/**
 * Methode pour récupérer 10 post (les plus récents) par page
 * @param page le numéro de la page actuelle
 * Si la page est 1 il faut récupérer les 10 post les plus récents
 * Si la page est 2 il faut récupérer les post du 11ème au 20ème les plus récents
 * ...
 */
exports.getAll = async (req, res) => {
    const { page = 1 } = req.query; 
    const limit = 10; 
    const skip = (page - 1) * limit; 

    try {
        const listPost = await Post.find()
            .sort({ date: -1 }) 
            .skip(skip) 
            .limit(limit); 

        res.status(200).json(listPost);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

/**
 * Methode pour récupérer un post par son id, et les commentaires associés à ce post
 */
exports.getById = async () => {
    try{
        //TODO
        res.status(200).json(postWithComment);
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Methode pour créer un nouveau post (attention à bien enregistrer la date de création)
 * @body
 * {
 *     message: <string>,
 *     userId: <string>
 * }
 */
exports.create = async (req, res) => {
    try{
        let newPost = {
            ...req.body,
            date : new Date()
        }
        let post = await Post.create(newPost);
        res.status(201).json(post);
    }catch(e){
        res.status(500).json(e.message);
    }
}

/**
 * Methode pour modifier un post (attention de bien mettre à jour la date du post)
 * @param id l'id du post à modifier
 * @body
 * {
 *     message: <string>
 * }
 */

exports.update = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { message, date: new Date() }, 
            { new: true } 
        );
        if (!updatedPost) {
            return res.status(404).json({ message: "Post non trouvé" });
        }
        res.status(200).json({ message: "Post mis à jour", updatedPost });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
/**
 * Methode pour supprimer un post (attention de bien supprimer les commentaires associés)
 * @param id l'id du post à supprimer
 */
exports.delete = async (req, res) => {
    try{
        let id = req.params.id
        await Comment.deleteMany({postId : id});
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post non trouvé" });
        }
        res.status(200).json({message: "Post supprimé"});
    }catch(e){
        res.status(500).json(e.message);
    }
}
