const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 2000;
const cors = require("cors");
const db = require("./models");
const bearer = require("express-bearer-token");

const {
  eventRoutes,
  userRoutes,
  carouselRoutes,
  orderRoutes,
  dashboardRoutes,
} = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bearer());
// app.use(bodyParser());

app.get("/", (req, res) => res.send("WELCOME TO EXPRESS API"));
app.use("/events", eventRoutes);
app.use("/users", userRoutes);
app.use("/carousels", carouselRoutes);
app.use("/orders", orderRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(PORT, () => {
  console.log(`LISTEN ON PORT ${PORT}🚀`);
  // db.sequelize.sync({ alter: true });
});
