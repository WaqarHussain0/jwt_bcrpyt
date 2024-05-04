const User = require("../models/user");

const sequelize = require("./PostgreSQL");
const models = {
  User
};

const db = {};
db.sequelize = sequelize;

module.exports = { models, db };
