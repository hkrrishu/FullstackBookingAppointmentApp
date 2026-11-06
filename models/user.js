
const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "User",
    timestamps: false
});

module.exports = User;
