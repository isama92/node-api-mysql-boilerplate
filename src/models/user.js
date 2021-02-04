const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cognome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'utenti',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = User;
