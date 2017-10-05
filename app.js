var express = require('express')
var bodyParser = require('body-parser')

var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');
let index = require('./routers/index');
let teacher = require('./routers/teacher');
let subject = require('./routers/subject');
let student = require('./routers/student');

app.use('/',index);
app.use('/subject',subject);
app.use('/teacher',teacher);
app.use('/student', student);

app.listen(3000,()=>{
  console.log('Jalan port 3000');
})
