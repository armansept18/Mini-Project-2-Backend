const dashboard = require("../models/dashboard");
const Entity = require("./entity");
const db = require("../models");

class Dashboard extends Entity {
  constructor(model) {
    super(model);
  }
  async getEventsPurchasedByUser(req, res) {
    try {
      const userId = req.user.id;

      const Order = db.Order;

      const Event = db.Event;

      const userOrders = await Order.findAll({
        where: {
          userId: userId,
          isPayment: true,
        },
      });

      if (!userOrders || userOrders.length === 0) {
        return res
          .status(404)
          .send("Tidak ada acara yang dibeli oleh user ini.");
      }

      const purchasedEvents = [];

      for (const order of userOrders) {
        const event = await Event.findByPk(order.eventId);
        if (event) {
          purchasedEvents.push(event);
        }
      }

      res.send({ purchasedEvents });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
module.exports = Dashboard;
