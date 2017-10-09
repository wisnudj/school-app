let express = require('express');
let router = express.Router();
let model = require('../models');
const crypto = require('crypto');
let alpanumerik =  require('../helper/alpanumerik')


router.get('/', (req, res) => {
  res.render('signup')
})


router.post('/', (req, res) => {
  var secret = alpanumerik(8)

  var passAwal = req.body.password

  const password = crypto.createHmac('sha256', secret)
                         .update(passAwal)
                         .digest('hex');

  model.Users.create({
    username: req.body.username,
    password: password,
    role: req.body.role,
    salt: secret
  }).then(() => {
    res.redirect('/')
  })
})


module.exports = router;
