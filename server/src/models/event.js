"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        as: "user",
        foreignKey: "userid",
      });
    }
  }
  Event.init(
    {
      imageUrl: DataTypes.TEXT("LONG"),
      eventName: DataTypes.STRING,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.TEXT("LONG"),
      category: DataTypes.STRING,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Event",
      paranoid: true,
    }
  );
  return Event;
};
