let express = require('express');
let router = express.Router();
let model = require('../models');

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  model.Users.findOne({
    where : {
      username: req.body.username
    }
  }).then(dataUser =>{
    if(dataUser.password === req.body.password){
            req.session.username = dataUser.username
            req.session.role = dataUser.role
            res.redirect('/index')
    } else {
      res.render('login')
    }
  }).catch(()=>{
      res.render('login')
  })
  // model.Users.findAll().then((dataUsers) => {
  //   for(var i = 0; i < dataUsers.length; i++) {
  //     if(req.body.username == dataUsers[i].username && req.body.password == dataUsers[i].password) {
  //       req.session.username = dataUsers[i].username
  //       req.session.role = dataUsers[i].role
  //       res.redirect('/index')
  //     }
  //   }
  // })
})

module.exports = router;
