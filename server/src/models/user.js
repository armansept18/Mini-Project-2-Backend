"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Event, {
        as: "events",
        foreignKey: "id",
      });
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      referralCode: DataTypes.STRING,
      referralCodeFromFriend: {
        type: DataTypes.STRING,
      },
      // purchasedEvent: DataTypes.INTEGER,
      credit: DataTypes.INTEGER,
      reset_pass: DataTypes.STRING,
      is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
      login_attempt: DataTypes.INTEGER,
      suspended_date: {
        type: "TIMESTAMP",
        defaultValue: sequelize.fn("NOW"),
      },
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
    }
  );
  return User;
};
