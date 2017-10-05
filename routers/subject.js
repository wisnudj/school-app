let express = require('express');
let router = express.Router();
let model = require('../models');

router.get('/',(req, res)=>{
  model.Subject.findAll().then(dataSubjects => {
    // res.send(dataTeachers);
  res.render('subject',{dataSubjects:dataSubjects});
  })
})
module.exports = router;
