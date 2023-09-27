"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {}
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "events",
          key: "id",
        },
      },
      eventPrice: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      isPayment: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "Orders",
    }
  );
  return Order;
};
