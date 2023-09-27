const db = require("../models");
const Entity = require("../entities/entity"); // Perhatikan perubahan dari "./enity" ke "./entity"
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const shortid = require("shortid");
const Event = require("../models/event");
class User extends Entity {
  constructor(model) {
    super(model);
  }

  login(req, res) {
    const { fullname, password, email } = req.body;
    db.User.findOne({
      where: {
        [db.Sequelize.Op.or]: {
          email: { [db.Sequelize.Op.like]: `%${email}%` },
          fullname: { [db.Sequelize.Op.like]: `%${fullname}%` },
        },
      },
    })
      .then(async (result) => {
        if (!result) {
          return res.status(404).send("User Not Found!");
        }

        console.log(
          moment(result.dataValues.suspended_date).diff(moment().format()),
          "this"
        );
        if (
          moment(result.dataValues.suspended_date).diff(moment().format()) > 0
        )
          throw new Error(
            `yahh kena suspend wkwk tunggu  ${
              moment(result.dataValues.suspended_date).diff(moment().format()) /
              1000
            } sec`
          );

        const isValid = await bcrypt.compare(
          password,
          result.dataValues.password
        );
        if (!isValid) {
          if (result.dataValues.login_attempt >= 2)
            db.User.update(
              {
                login_attempt: 0,
                suspended_date: moment()
                  .add(moment.duration(10, "second"))
                  .format(),
              },
              {
                where: {
                  id: result.dataValues.id,
                },
              }
            );
          else
            db.User.update(
              { login_attempt: result.dataValues.login_attempt + 1 },
              {
                where: {
                  id: result.dataValues.id,
                },
              }
            );
          throw new Error("wrong password");
        }
        delete result.dataValues.password;

        const payload = {
          id: result.dataValues.id,
          is_verified: result.dataValues.is_verified,
        };

        const token = jwt.sign(payload, process.env.jwt_secret, {
          expiresIn: "1h",
        });
        console.log(token);
        return res.send({ token, user: result });
      })
      .catch((err) => {
        res.status(500).send(err?.message);
      });
  }
  async register(req, res) {
    const { email, password, fullname } = req.body;

    db.User.findOne({ where: { email } })
      .then(async (existingUser) => {
        if (existingUser) {
          res.status(400).send({ message: "Email Already Registered!" });
        } else {
          try {
            // untuk regenerate reffCode nya
            const referralCode = shortid.generate();

            const hashedPassword = await bcrypt.hash(password, 10);

            db.User.create({
              email,
              password: hashedPassword,
              fullname,
              referralCode: referralCode,
            })
              .then((newUser) => {
                const token = jwt.sign({ userId: newUser.id }, "SECRET", {
                  expiresIn: "1h", // Token berlaku selama 1 jam
                });

                res.status(201).send({
                  message: "Registrasi berhasil",
                  user: newUser,
                  token,
                });
              })
              .catch((error) => {
                console.error(
                  "Terjadi kesalahan saat membuat pengguna baru:",
                  error
                );
                res.status(500).send(error.message);
              });
          } catch (error) {
            console.error("error dikit gak ngaruh", error);
            res.status(500).send(error.message);
          }
        }
      })
      .catch((error) => {
        console.error("error saat mencari email boss", error);
        res.status(500).send(error.message);
      });
  }
  async alwaysLogin(req, res) {
    try {
      console.log(req.headers);
      const { token } = req;
      console.log(token);
      const data = jwt.verify(token, process.env.jwt_secret);
      console.log(data);
      if (!data.id) throw new Error("Invalid Token!");

      console.log(data);

      const payload = await db.User.findOne({
        where: {
          id: data.id,
        },
      });
      delete payload.dataValues.password;

      const newToken = jwt.sign(
        { id: data.id, is_verified: payload.dataValues.is_verified },
        process.env.jwt_secret,
        {
          expiresIn: "15m",
        }
      );

      return res.send({ token: newToken, user: payload });
    } catch (err) {
      res.status(500).send(err?.message);
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
  async topupCredit(req, res) {
    try {
      const { amount } = req.body;
      const { id } = req.user;

      if (!amount || isNaN(amount) || amount <= 0) {
        return res.status(400);
      }

      const user = await db.User.findByPk(id);

      if (!user) {
        return res.status(404).send("User not found!");
      }

      const currentCredit = user.credit || 0;

      const newCredit = currentCredit + amount;

      await user.update({ credit: newCredit });

      const formattedCredit = newCredit.toLocaleString("en-US", {});

      return res.send(
        `Top-up credit berhasil. Saldo credit baru: ${formattedCredit}`
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async verify(req, res) {
    try {
      const { token } = req.query;
      const payload = jwt.verify(token, process.env.jwt_secret);

      if (payload.is_verified) throw new Error("User Verified!");
      await db.User.update(
        {
          is_verified: true,
        },
        {
          where: {
            id: payload.id,
          },
        }
      );
      res.send("User Not Verified!");
    } catch (err) {
      res.status(500).send(err?.message);
    }
  }
}

module.exports = User;
