const jwt = require("jsonwebtoken")

const createJwtToken = (userID) => {
  return jwt.sign({ userID },"kiendao2001", {
    expiresIn: '10h' 
  })
}

const verifyToken = (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(token, "kiendao2001");
      req.user = decoded;
    } catch (err) {
      return res.status(200).send("Invalid Token");
    }
    return next();
  };
  

module.exports = { createJwtToken, verifyToken }