const router = require('express').Router();
const User = require("./authUsersModels")
const bcrypt = require("bcrypt")

router.post('/register', (req, res) => {
  const { username, password } = req.body 
  User.insert({ username, password: bcrypt.hashSync(password, 10) })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err:"user could not be registered"})
  })

});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
