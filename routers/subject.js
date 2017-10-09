let express = require('express');
let router = express.Router();
let model = require('../models');

router.use((req, res, next) => {
  if(req.session.role == null && req.session.username == null) {
    res.redirect('/')
  }
  else if(req.session.role == 'teacher') {
    res.redirect('/index')
  }
  else {
    next()
  }
})

router.get('/', (req, res) => {
  model.Subject.findAll({
    include: [model.Teacher]}).then((dataSubject) => {
    //res.send(dataSubject)
    res.render('subject', {session:req.session,dataSubject: dataSubject, title: 'Subject Data'})
  })
})

router.get('/add', (req, res) => {
  res.render('subjectadd', {title: 'Add Subject'})
})

router.post('/add', (req, res) => {
  model.Subject.create({subject_name: req.body.subject_name}).then((dataSubject) => {
    res.redirect('/subject')
  })
})

router.get('/:id/enrolledstudent', (req, res) => {
  model.SubjectStudent.findAll({include: [model.Subject, model.Student], where: {SubjectId: req.params.id}, order:[[model.Student, 'first_name']]}).then((dataSubjectStudent) => {
    //res.send(dataSubjectStudent)

    res.render('enrolledstudent', {title: 'Enrolled Student', dataSubjectStudent: dataSubjectStudent})
  })
})

router.get('/:id/givescore', (req, res) => {
  model.SubjectStudent.findAll({include: [model.Subject, model.Student], where: {id: req.params.id}}).then((dataSubjectStudent) => {
    res.render('givescore', {dataSubjectStudent: dataSubjectStudent, title: 'givescore'})
  })
})

router.post('/:id/givescore', (req, res) => {
  model.SubjectStudent.update({score: req.body.score}, {where: {id: req.params.id}}).then((dataStudent) => {
    res.redirect('/subject')
  })
})

module.exports = router;
