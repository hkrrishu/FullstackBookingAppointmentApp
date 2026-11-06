
const User = require("../models/user");

// POST - Add user
const addUser = async (req, res) => {
    try {
        const { username, email, phone } = req.body;

        const newUser = await User.create({
            username: username,
            email: email,
            phone: phone
        });

        res.status(201).json(newUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Unable to add user"
        });
    }
};

// GET - Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json(users);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Unable to fetch users"
        });
    }
};

// DELETE - Delete a user
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await User.destroy({
            where: {
                id: userId
            }
        });

        if (deletedUser === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Unable to delete user"
        });
    }
};


module.exports = {
    addUser,
    getUsers,
    deleteUser
};
