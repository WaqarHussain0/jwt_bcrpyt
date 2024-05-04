const { Sequelize } = require("sequelize");
const env = require("dotenv");
env.config();
const saltRound = parseInt();
// Create a Sequelize instance
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: process.env.POSTGRESQL_PORT,
  username: "postgres",
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE,
  logging: false,
});

const database = sequelize;

database
  .authenticate()
  .then(console.log("Connected to DB"))
  .catch((error) => console.log(error));

module.exports = database;
