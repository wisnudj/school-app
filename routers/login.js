let express = require('express');
let router = express.Router();
let model = require('../models');
const crypto = require('crypto');
let alpanumerik =  require('../helper/alpanumerik')

router.get('/', (req, res) => {
  res.render('login', {msgError: ''})
})

router.post('/', (req, res) => {
  if(!req.body.username || !req.body.password) {
    res.render('login', {msgError: 'Belum terisi'})
  }
  else {
    model.Users.findOne({where: {username: req.body.username}}).then(dataUser => {
       let secret = dataUser.salt
       let nakedPassword = req.body.password;
       const passwordInput = crypto.createHmac('sha256', secret)
                            .update(nakedPassword)
                            .digest('hex');
      //res.send(dataUser)
      if(passwordInput == dataUser.password) {
        req.session.username = dataUser.username
        req.session.role = dataUser.role
        res.redirect('/index')
      }
      else {
        res.render('login', {msgError: 'password salah'})
      }
    }).catch(() => {
      res.render('login', {msgError: 'error'})
    })
  }
  /*model.Users.findOne({
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
  }) */
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
