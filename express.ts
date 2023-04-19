const express = require('express')
require('dotenv').config()
require('./connection')
const bodyParser = require('body-parser')
const appRoutes = require('./src/Routes/index')

const app = express()
const port = 8000


app.use(express.static(__dirname + '/Public'))
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.use('/', appRoutes)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
