const db = require("../models");
class Entity {
  constructor(model = "") {
    this.model = model;
  }
  getAll(req, res) {
    db[this.model]
      .findAll()
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err.message));
  }
  getById(req, res) {
    const { id } = req.params;
    db[this.model]
      .findOne({ where: { id } })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err.message));
  }
  create(req, res) {
    db[this.model]
      .create({ ...req.body })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err.message));
  }
  deleteById(req, res) {
    const { id } = req.params;
    db[this.model]
      .destroy({
        where: { id },
      })
      .then(() => res.send({ message }))
      .catch((err) => res.status(500).send(err.message));
  }
  updateById(req, res) {
    const { id } = req.params;
    console.log(req.body);
    db[this.model]
      .update(
        { ...req.body },
        {
          where: { id },
        }
      )
      .then(() => this.getById(req, res))
      .catch((err) => res.status(500).send(err.message));
  }
}

module.exports = Entity;
