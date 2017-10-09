var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(session({secret: "Shh, its a secret!"}))

let index = require('./routers/index');
let teacher = require('./routers/teacher');
let subject = require('./routers/subject');
let student = require('./routers/student');
let login = require('./routers/login');
let logout = require('./routers/logout')
let signup = require('./routers/signup')

app.use('/',login);
app.use('/index', index)
app.use('/subject',subject);
app.use('/teacher',teacher);
app.use('/student', student);
app.use('/logout', logout)
app.use('/signup', signup)


app.listen(3000,()=>{
  console.log('Jalan port 3000');
})
