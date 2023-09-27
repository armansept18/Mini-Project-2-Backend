const db = require("../models");
const carousel = require("../models/carousel")
const carouselControllers = {
  getAll(req, res) {
    db.Carousel.findAll()
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  },
};

module.exports = carouselControllers;
