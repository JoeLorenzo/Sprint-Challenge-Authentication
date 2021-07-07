const jwt = require("jsonwebtoken")
/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
  const token = req.headers.auth
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_SAUCE || 'Top_Secret', (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message:"Invalid token." })
      }
      else {
        req.user = decodedToken
        next()
      }
    })
  }
  else {
    res.status(400).json({ message:"No authentication token provided." })
  }
};
