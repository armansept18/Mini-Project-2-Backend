"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carousel extends Model {
    static associate(models) {}
  }
  Carousel.init(
    {
      imageCarousel: DataTypes.TEXT("LONG"),
    },
    {
      sequelize,
      modelName: "Carousel",
      paranoid: true,
    }
  );
  return Carousel;
};
