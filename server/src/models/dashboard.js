"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dashboard extends Model {
    static associate(models) {}
  }
  dashboard.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      eventId: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },

      userId: {
        type: DataTypes.INTEGER,

        references: {
          model: "Users", // Nama tabel user dalam basis data Anda
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "dashboard",
    }
  );
  return dashboard;
};
