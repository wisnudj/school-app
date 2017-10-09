let express = require('express');
let router = express.Router();
let model = require('../models');


router.get('/', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
