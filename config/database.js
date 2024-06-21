const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    database: 'expressnote',
    username: 'postgres', // Changed from 'user' to 'username'
    password: '123456',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres', // Added dialect
    ssl: true,
    clientMinMessages: 'notice',
});

module.exports = {
    sequelize,
    DataTypes,
    Sequelize
};
