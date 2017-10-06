let express = require('express');
let router = express.Router();
let model = require('../models');


router.get('/', (req, res) => {
  model.Student.findAll().then(dataStudent => {
    res.render('student', {dataStudent: dataStudent})
  })
})

router.get('/add', (req, res) => {
  res.render('studentAdd')
})

router.post('/add', (req, res) => {
  model.Student.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email}).then(dataStudent =>{
    res.redirect('/student')
  })
})

router.get('/edit/:id', (req, res)=> {
  model.Student.find({where: {id: req.params.id}}).then((dataStudent) => {
    res.render('studentEdit', {dataStudent: dataStudent})
  })
})

router.post('/edit/:id', (req, res) => {
  model.Student.find({
    where: {
      id: req.params.id
    }
  }).then((dataStudent) => {
    if(dataStudent){
      dataStudent.updateAttributes({
        first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email
      }).then((dataStudent) => {
        res.redirect('/student');
      });
    }
  })
})

router.get('/delete/:id', (req, res) => {
  model.Student.destroy({where:{id: req.params.id}}).then((dataStudent) => {
    res.redirect('/student')
  })
})

module.exports = router
