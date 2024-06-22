const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const skills = require('./model/Skills')
const about = require('./model/About')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://0.0.0.0:27017/Portfolio')


app.get("/getskills", (req, res) => {
    skills.find({})
    .then(skills => res.json(skills))
    .catch(err => res.json(err))
})

app.post("/createskill", (req, res) => {
    skills.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running on 3001")
})
