const db = require("../models");
const Entity = require("./entity");
const jwt = require("jsonwebtoken");
const { Order, User, Event } = require("../models");
const saveTransactionToDashboard = require("../entities/dashboard");

class OrderEvents extends Entity {
  constructor(model) {
    super(model);
  }

  async getAllOrders(req, res) {
    try {
      const result = await Order.findAll({
        include: [{ model: db.Event, as: "events" }],
      });

      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      res.status(error?.statusCode || 500).json({
        status: "error",
        message: error?.message || "An error occurred.",
      });
    }
  }

  async getOrderById(req, res) {
    try {
      const result = await Order.findByPk(req.params.id, {
        include: [{ model: db.Event, as: "events" }],
      });
      if (!result) throw new Error("Order not found");

      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      res.status(error?.statusCode || 500).json({
        status: "error",
        message: error?.message || "An error occurred.",
      });
    }
  }

  async createOrder(req, res) {
    try {
      const { eventId, quantity } = req.body;
      const userId = req.user.id;

      // check user
      const userData = await User.findByPk(userId);
      if (!userData) throw new Error("User not found");

      // check event
      const eventData = await Event.findByPk(eventId);
      if (!eventData) throw new Error("Event not found");

      // check event stock
      if (eventData.stock - quantity < 0)
        throw new Error("Event stock not enough");
      await eventData.increment({ stock: -quantity });

      // Calculate total price
      const totalPrice = quantity * eventData.price;

      // create order
      const orderData = await Order.create({
        userId,
        eventId,
        quantity,
        fullname: userData.fullname,
        email: userData.email,
        totalPrice,
        eventPrice: eventData.price,
      });
      console.log(orderData);

      // Respond with ticket information
      res.status(201).json({
        status: "success",
        data: {
          ...orderData.toJSON(),
          fullname: `${userData.fullname}`,
          email: `${userData.email}`,
          eventPrice: eventData.price,
          totalPrice,
        },
      });
    } catch (error) {
      res.status(error?.statusCode || 500).json({
        status: "error",
        message: error?.message || "error dikit gak ngaruh",
      });
    }
  }
  async payment(req, res) {
    try {
      const event = db.Event;
      const orderId = req.body.id;
      const userId = req.user.id;

      // Cari data pesanan
      const orderData = await db.Order.findByPk(orderId);
      if (!orderData) {
        throw new Error("Order not found");
      }

      const userData = await db.User.findByPk(userId);
      if (!userData) {
        throw new Error("User not found");
      }

      if (orderData.isPayment) {
        throw new Error("Order has already been paid");
      }

      const totalPrice = orderData.totalPrice;

      if (userData.credit < totalPrice) {
        throw new Error("Insufficient credit");
      }

      const updatedCredit = userData.credit - totalPrice;
      await userData.update({ credit: updatedCredit });

      const newEvent = await db.dashboard.create({
        eventId: orderData.eventId,
        quantity: orderData.quantity,
        userId: userId,
      });

      await orderData.update({ isPayment: true });

      res.status(200).json({
        status: "success",
        message: "Payment successful",
        data: {
          order: orderData.toJSON(),
          updatedCredit,
          newEvent: newEvent.toJSON(),
        },
      });
    } catch (error) {
      res.status(error?.statusCode || 500).json({
        status: "error",
        message: error?.message || error,
      });
      console.error(error);
    }
  }

  async payment1(req, res) {
    try {
      const orderId = req.body.id;
      const userId = req.user.id;
      const referralCodeFromFriend = req.body.referralCodeFromFriend;

      // Cari data pesanan
      const orderData = await Order.findByPk(orderId);
      if (!orderData) {
        throw new Error("Order not found");
      }

      const userData = await User.findByPk(userId);
      if (!userData) {
        throw new Error("User not found");
      }

      if (orderData.isPayment) {
        throw new Error("Order has already been paid");
      }

      // Cek apakah pengguna memiliki referral code from friend yang belum digunakan
      if (userData.referralCodeFromFriend) {
        throw new Error("Referral code from friend has already been used");
      }

      let totalPrice = orderData.totalPrice;

      // Cek apakah ada referral code from friend yang digunakan dalam permintaan
      if (referralCodeFromFriend) {
        const reftes = await User.findOne({
          where: { referralCode: referralCodeFromFriend },
        });

        // Periksa apakah reftes ditemukan dan cocok dengan referralCodeFromFriend yang dicari
        if (reftes && !reftes.referralCodeFromFriend) {
          // Jika referral code from friend valid dan belum digunakan oleh pengguna lain
          const discount = totalPrice * 0.1; // Potongan harga 10%
          totalPrice -= discount;

          // Update status referral code from friend pada pengguna
          await userData.update({
            referralCodeFromFriend: referralCodeFromFriend,
          });

          // Tandai referral code from friend sebagai digunakan pada teman yang memberikannya
          await reftes.update({
            referralCodeFromFriend: true,
          });
        }
      }

      if (userData.credit < totalPrice) {
        throw new Error("Insufficient credit");
      }

      const updatedCredit = userData.credit - totalPrice;
      await userData.update({ credit: updatedCredit });

      await orderData.update({ isPayment: true });

      res.status(200).json({
        status: "success",
        message: "Payment successful",
        data: {
          order: orderData.toJSON(),
          updatedCredit,
        },
      });
    } catch (error) {
      res.status(error?.statusCode || 500).json({
        status: "error",
        message: error?.message || error,
      });
      console.log(error);
    }
  }
  async viewPurchasedEvents(req, res) {
    try {
      const userId = req.user.id; // Mengambil ID user dari token yang diautentikasi

      // Menggunakan model acara (events) yang sesuai dengan aplikasi Anda
      const Event = db.Event;

      // Mengambil semua acara (events) yang sudah dibeli oleh user dengan ID yang sesuai
      const purchasedEvents = await Event.findAll({
        where: {
          userId: userId, // Sesuaikan dengan nama kolom yang digunakan di model Anda
        },
      });

      if (!purchasedEvents || purchasedEvents.length === 0) {
        return res
          .status(404)
          .send("Tidak ada acara yang dibeli oleh user ini.");
      }

      res.send({ purchasedEvents });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = OrderEvents;
