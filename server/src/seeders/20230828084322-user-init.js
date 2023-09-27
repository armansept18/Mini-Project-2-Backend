"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        fullname: "admin1",
        email: "admin1@mail.com",
        password: "123456",
        referralCode: "JF3EHB",
        referralCodeFromFriend: "",
        credit: 500000,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        fullname: "admin2",
        email: "admin2@mail.com",
        password: "arifarifah",
        referralCode: "5VVU4W",
        referralCodeFromFriend: "JF3EHB",
        credit: 500000,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        fullname: "admin3",
        email: "admin3@mail.com",
        password: "123",
        referralCode: "S3JWUP",
        referralCodeFromFriend: "",
        credit: 54970,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
