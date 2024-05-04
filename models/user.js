const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/PostgreSQL");

class User extends Model {}
User.init(
  {
    userID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    // paranoid: true,
    modelName: "User",
  }
);

module.exports = User;
