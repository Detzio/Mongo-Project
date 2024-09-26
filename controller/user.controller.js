const User = require("./../model/user.model");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Assurez-vous que le modèle User est correctement importé

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
            return res.status(404).json({ message: 'User not found or invalid credentials' });
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
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            password,
            username
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}