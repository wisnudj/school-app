let express = require('express');
let router = express.Router();
let model = require('../models');


router.get('/', (req, res) => {
  model.Student.findAll().then(dataStudent => {
    res.render('student', {dataStudent: dataStudent})
  })
})

module.exports = router
