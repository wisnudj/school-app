let express = require('express');
let router = express.Router();


router.get('/',(req, res)=>{
  res.render('index', {session:req.session, title: 'Home'});
  //res.redirect('/login')
})
module.exports = router;
