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
            type: DataTypes.INTEGER,
            defaultValue: 1,
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