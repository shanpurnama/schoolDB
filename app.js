require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const routerSubject = require('./routes/subject')
app.use('/subjects', routerSubject)

const routerTeacher = require('./routes/teacher')
app.use('/teachers', routerTeacher)

const routerStudent = require('./routes/student')
app.use('/students', routerStudent)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})