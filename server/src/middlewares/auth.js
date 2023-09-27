const jwt = require("jsonwebtoken");
const check_verified = (req, res, next) => {
  const token = req.header('Authorization');
    if(!token) {
      return res.status(401).json({message: 'Unauthorized: Missing Token!'})
    }
    try {
      const decoded = jwt.verify(token, process.env.jwt_secret);
      req.token = decoded;
    } catch (error) {
      return res.status(401).json({message: 'Unauthorized: Invalid Token!'})
    }
};
module.exports = check_verified;
