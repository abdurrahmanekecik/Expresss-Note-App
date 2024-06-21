const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { sequelize } = require("./config/database"); // Assuming the database connection is in config/database.js

// Middleware to parse request body
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import and use routes
const routes = require("./routes/index");
app.use(routes);

// Test database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Unable to synchronize the database:', err);
    });




// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
