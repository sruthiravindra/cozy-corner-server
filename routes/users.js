var express = require('express');
var userRouter = express.Router();
const User = require('../models/user')

/* GET users listing. */
userRouter.route('/')
  .get((req, res, next) => {
    User.find()
      .then(users => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.json(users);
      })
      .catch(err => next(err))
  })
  .post((req, res, next) => {
    User.create(req.body)
      .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.json(user);
      })
      .catch(err => next(err))
  })

module.exports = router;
