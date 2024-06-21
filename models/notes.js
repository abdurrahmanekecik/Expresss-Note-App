const { sequelize, DataTypes, Sequelize } = require('../config/database');

const Note = sequelize.define(
    'Note',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    },
    {
        indexes: [{ unique: true, fields: ["id"] }],
    }
);

module.exports = Note; // Export Note directly
