const db = require("../models");
const Entity = require("../entities/entity");
const jwt = require("jsonwebtoken");

class Event extends Entity {
  constructor(model) {
    super(model);
  }

  async editEvent(req, res) {
    const { id } = req.params;
    const eventData = req.body;
    const { token } = req;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User Not Logged In!" });
    }
    try {
      const dataToken = jwt.verify(token, process.env.jwt_secret); // Define dataToken here

      const existingEvent = await db.Event.findByPk(id);
      if (!existingEvent) {
        return res
          .status(404)
          .json({ message: `Event with ID ${id} not found!` });
      }
      if (existingEvent.userid !== dataToken.id) {
        return res.status(403).json({
          message: `Unauthorized: You are not the owner of this event!`,
        });
      }

      await existingEvent.update({
        ...eventData,
      });
      res.status(200).json({
        message: `Event with ID ${id} successfully edited!`,
        updatedEvent: existingEvent,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error?.message);
    }
  }
  async createEvent(req, res) {
    const { token } = req;

    if (!token) {
      return res.status(401).send("Authentication token required");
    }
    try {
      const dataToken = jwt.verify(token, process.env.jwt_secret);
      const eventData = req.body;

      if (req.file) {
        eventData.imageUrl = req.file.filename;
      }
      eventData.userid = dataToken.id;

      const eventCreate = await db.Event.create(eventData);
      res.status(200).json({
        message: "Event Created!",
        eventCreate,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err?.message);
    }
  }
  async deleteEvent(req, res) {
    const { id } = req.params;
    const { token } = req;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User Not Logged In!" });
    }
    try {
      const dataToken = jwt.verify(token, process.env.jwt_secret);
      const existingEvent = await db.Event.findByPk(id);
      if (!existingEvent) {
        return res
          .status(404)
          .json({ message: `Event with ID ${id} not found!` });
      }
      if (existingEvent.userid !== dataToken.id) {
        return res.status(403).json({
          message: `Unauthorized: You are not the owner of this event!`,
        });
      }
      await existingEvent.destroy();
      res
        .status(200)
        .json({ message: `Event with ID ${id} successfully deleted!` });
    } catch (error) {
      console.log(error);
      res.status(500).send(error?.message);
    }
  }

  getAllEventWithUser(req, res) {
    db.Event.findAll({
      include: { model: db.User, as: "user" },
    })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  }
  getEventByUserId(req, res) {
    db.Event.findAll({
      include: { model: db.User, as: "user" },
      where: {
        userid: req.params.userid,
      },
      order: [["createdAt", "DESC"]],
    })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  }
  async createUserAndEvent(req, res) {
    try {
      await db.sequelize.transaction(async (t) => {
        const newUser = await db.User.create(
          { ...req.body.users },
          { transaction: t }
        );
        const events = { ...req.body.events, userid: newUser.dataValues.id };
        await db.Event.create({ ...events }, { transaction: t });
        return res.send({ message: "EVENT AND USER SUCCESSFULLY ADDED!" });
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err?.message });
    }
  }
  getEventByFilter(req, res) {
    const { location, category } = req.query;
    db.Event.findAll({
      where: {
        [db.Sequelize.Op.or]: {
          location: { [db.Sequelize.Op.like]: `%${location}%` },
          category: { [db.Sequelize.Op.like]: `%${category}%` },
        },
      },
    })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  }
  authenticate(req, res, next) {
    const token = req.header("Authorization");

    if (!token) {
      return res
        .status(400)
        .send({ message: "Token diperlukan untuk pendaftaran acara." });
    }

    // Menghilangkan kata "Bearer " dari token untuk mendapatkan token
    const tokenString = token.replace("Bearer ", "");

    try {
      const dataToken = jwt.verify(tokenString, process.env.jwt_secret);
      req.user = dataToken;
      next(); // Lanjutkan ke penanganan pendaftaran setelah autentikasi berhasil
    } catch (error) {
      return res.status(401).send({ message: "Token otentikasi tidak valid." });
    }
  }
  async registerParticipant(req, res) {
    const { token } = req;
    const { fullname, email } = req.body;
    const { id: eventId } = req.params;

    if (!token) {
      return res
        .status(400)
        .send({ message: "Token diperlukan untuk pendaftaran acara." });
    }

    try {
      // Verifikasi token untuk mendapatkan data pengguna
      const dataToken = jwt.verify(token, process.env.jwt_secret);

      // Buat peserta baru
      const participant = await db.Participant.create({
        fullname,
        email,
        // Menggunakan eventId dari parameter URL
        userId: dataToken.id, // Menggunakan ID pengguna dari token
      });

      const transaction = await this.createTransaction(participant.id, eventId);

      return res.status(201).send({
        message: "Pendaftaran peserta berhasil.",
        participant,
        transaction,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Terjadi kesalahan dalam pendaftaran peserta." });
    }
  }

  async createTransaction(participantId, eventId) {
    try {
      // Buat transaksi terkait dengan pendaftaran peserta
      const transaction = await db.Transaction.create({
        participantId,
        eventId,
        // Jumlah pembayaran atau informasi pembayaran lainnya bisa ditambahkan di sini
      });

      return transaction;
    } catch (error) {
      console.error(error);
      throw new Error("Terjadi kesalahan dalam pembuatan transaksi.");
    }
  }
}
module.exports = Event;
