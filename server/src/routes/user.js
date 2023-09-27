const express = require("express");
const userController = require("../controllers/user");
const { validate, userValidationRules } = require("../middlewares/validator");
const verifyToken1 = require("../middlewares/verifyToken");
const route = express.Router();

route.get("/", userController.getAll.bind(userController));
route.get("/:id", userController.getById.bind(userController));
route.post(
  "/v1",
  userValidationRules(),
  validate,
  userController.register.bind(userController)
);
route.post("/v2", userController.login.bind(userController));
route.get("/token", userController.alwaysLogin.bind(userController));
route.get(
  "/dataEvents",
  verifyToken1,
  userController.viewPurchasedEvents.bind(userController)
);
route.post("/verify/", userController.verify.bind(userController));
route.post(
  "/topup",
  verifyToken1,
  userController.topupCredit.bind(userController)
);

module.exports = route;
