let express = require('express');
let router = express.Router();
let model = require('../models');


router.get('/',(req, res)=>{
  model.Teacher.findAll().then(dataTeachers => {
    // res.send(dataTeachers);
  res.render('teacher',{dataTeachers:dataTeachers});
  })
})
module.exports = router;
