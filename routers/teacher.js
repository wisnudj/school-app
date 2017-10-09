let express = require('express');
let router = express.Router();
let model = require('../models');

router.use((req, res, next) => {
  if(req.session.username == null && req.session.role == null) {
    res.redirect('/')
  }
  else if(req.session.role == 'headmaster') {
    next()
  }
  else {
    res.redirect('/index')
  }
})

router.get('/', (req, res) => {
  model.Teacher.findAll({
    include: [model.Subject], order:['first_name']}).then((dataTeacher) => {
    //res.send(dataTeacher)
    res.render('teacher', {session:req.session,dataTeacher: dataTeacher, title: 'Teacher Data'})
  })
})

router.get('/add', (req, res) => {
  res.render('teacheradd', {title: 'Add Teacher', peringatan: null})
})

router.post('/add', (req, res) => {
  model.Teacher.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email}).then((dataTeacher) => {
    res.redirect('/teacher')
  })
})

router.get('/edit/:id', (req, res) => {
  model.Teacher.findAll({where: {id:req.params.id}}).then((dataTeacher) => {
    model.Subject.findAll().then((dataSubject) => {
      //res.send(dataTeacher)
      res.render('teacheredit', {dataTeacher: dataTeacher, title: 'Edit Teacher', dataSubject: dataSubject})
    })
  })
})

router.post('/edit/:id', (req, res) => {
  model.Teacher.update({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, SubjectId: req.body.SubjectId}, {where: {id: req.params.id}}).then((dataStudent) => {
    res.redirect('/teacher')
  })
})

router.get('/delete/:id', (req, res) => {
  model.Teacher.destroy({where: {id: req.params.id}}).then((dataTeacher) => {
    res.redirect('/teacher')
  })
})

module.exports = router;
