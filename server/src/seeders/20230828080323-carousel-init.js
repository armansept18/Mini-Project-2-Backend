"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Carousels", [
      {
        imageCarousel: "https://i.postimg.cc/3RFBmZCS/1688307238-r-Jo0og-1.jpg",
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageCarousel: "https://i.postimg.cc/k5WnqVqF/1690260495-Pra-Zyu-1.jpg",
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        imageCarousel: "https://i.postimg.cc/cHDNTfdh/1690901880-BOBxv-Q-1.jpg",
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
