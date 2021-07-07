const jwt = require("jsonwebtoken")

module.exports = (user) => {
    const payload = {
        username: user.username,
        id: user.id
    }
    const options = {
        expiresIn: '1h'
    }
    return jwt.sign(payload, process.env.JWT_SECRET_SAUCE || 'Top_Secret', options)
}

