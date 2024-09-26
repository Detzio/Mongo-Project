const User = require("./../model/user.model");


/**
 * Methode pour la connexion utilisateur
 * @body
 * {
 *     email: <string>,
 *     password: <string>
 * }
 */
/**
 * Methode pour la connexion utilisateur
 * @body
 * {
 *     email: <string>,
 *     password: <string>
 * }
 */
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

/**
 * Méthode pour la création d'un compte utilisateur
 * @body
 * {
 *     email: <string>,
 *     password: <string>,
 *     username: <string>
 * }
 */
exports.signin = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}