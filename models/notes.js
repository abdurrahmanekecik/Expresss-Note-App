const { sequelize } = require("../config/database");


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
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active',
        },

        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },

    },
    {
        indexes: [{ unique: true, fields: ["id"] }],
    }

);
module.exports = {
    Note,
    sequelize,
};