const jwt = require("jsonwebtoken");

const verifyToken1 = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Missing Token!" });
  }

  const tokenString = token.replace("Bearer ", "");

  try {
    const dataToken = jwt.verify(tokenString, process.env.jwt_secret);
    if (dataToken.user_id !== req.user_id) {
      return res
        .status(401)
        .send({ message: "Unauthorized: Invalid Token User!" });
    }

    req.user = dataToken;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Token otentikasi tidak valid." });
  }
};

module.exports = verifyToken1;
