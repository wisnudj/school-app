let express = require('express');
let router = express.Router();
let model = require('../models');

router.use((req, res, next) => {
  if(req.session && req.session.hasOwnProperty('username')) {
    next()
  }else {
    res.redirect('/')
  }
})

router.get('/', (req, res) => {
  model.Student.findAll({order:['first_name']}).then((dataStudent) => {
    res.render('student', {session:req.session,dataStudent: dataStudent, title: 'Student Data'})
  })
})

router.get('/add', (req, res) => {
  res.render('studentadd', {title: 'Add Student', peringatan: null})
})

router.post('/add', (req, res) => {
  model.Student.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email}).then((dataStudent) => {
    res.redirect('/student')
  }).catch((err) => {
    res.render('studentadd', {title: 'Add Student', peringatan: 'email yang anda masukkan salah'})
  })
})

router.get('/edit/:id', (req, res) => {
  model.Student.findAll({where: {id: req.params.id}}).then((dataStudent) => {
    res.render('studentedit', {dataStudent: dataStudent, title: 'Edit Student'})
  })
})

router.post('/edit/:id', (req, res) => {
  model.Student.update({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email}, {where:{id:req.params.id}}).then((dataStudent) => {
    res.redirect('/student')
  })
})

router.get('/delete/:id', (req, res) => {
  model.Student.destroy({where: {id: req.params.id}}).then((dataStudent) => {
    res.redirect('/student')
  })
})

router.get('/:id/addsubject', (req, res) => {
  model.Student.findAll({where: {id: req.params.id}}).then((dataStudent) => {
    model.Subject.findAll().then((dataSubject) => {
      res.render('addsubject', {title: 'Add Subject', dataStudent: dataStudent, dataSubject: dataSubject})
    })
  })
})

router.post('/:id/addsubject', (req, res) => {
  model.SubjectStudent.create({StudentId: req.params.id, SubjectId: req.body.SubjectId}).then((dataStudent) => {
    res.redirect('/student')
  })
})

module.exports = router;
