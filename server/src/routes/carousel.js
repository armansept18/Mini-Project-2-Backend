const express = require("express");
const carouselControllers = require("../controllers/carousel");
const route = express.Router();

route.get("/", carouselControllers.getAll);

module.exports = route;
