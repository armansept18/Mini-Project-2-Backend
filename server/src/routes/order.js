const express = require("express");
const OrderController = require("../controllers/transaksi");
const verifyToken1 = require("../middlewares/verifyToken");

const route = express.Router();

route.get(
  "/dataEvents",
  verifyToken1,
  OrderController.viewPurchasedEvents.bind(OrderController)
);
route.get("/", OrderController.getAll.bind(OrderController));
route.get("/:id", OrderController.getById.bind(OrderController));
route.post(
  "/create",
  verifyToken1,
  OrderController.createOrder.bind(OrderController)
);
route.post(
  "/payment",
  verifyToken1,
  OrderController.payment.bind(OrderController)
);
route.post(
  "/payment1",
  verifyToken1,
  OrderController.payment1.bind(OrderController)
);
route.delete("/:id", OrderController.deleteById.bind(OrderController));

module.exports = route;
