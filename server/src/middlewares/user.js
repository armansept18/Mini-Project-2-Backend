const jwt = require("jsonwebtoken");
const check_verified = (req, res, next) => {
  try {
    const { token } = req.query;
    const data = jwt.verify(token, process.env.jwt_secret);
    if (!Number(data.is_verified)) throw new Error("User Not Verified!");
    if (data.id != req.query.user_id) throw new Error("Invalid User!");
    next();
  } catch (err) {
    return res.status(401).send(err?.message);
  }
};
module.exports = check_verified;
