const router = require('express').Router();
const User = require("./authUsersModels")
const bcrypt = require("bcrypt")

router.post('/register', (req, res) => {
  const { username, password } = req.body 
  User.insert({ username, password: bcrypt.hashSync(password, 10) })
    .then(id => {
      res.status(201).json({ message:"User successfully registered!", id })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err:"user could not be registered"})
  })

});

router.post('/login', (req, res) => {
  const { username, password } = req.body 
  User.findByUsername(username)
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //console.log(user)
        res.status(201).json({ message:"User successfully logged in!",  username})
      }
      else {
        res.status(401).json({ message:"unauthorized" })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err:"user could not be logged in" })
  })
});

module.exports = router;
