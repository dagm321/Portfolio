const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const skills = require('./model/Skills')
const aboutMe = require('./model/AboutMe')
const Messages = require('./model/Messages')
const social_media = require('./model/SocialMedia')
const project = require('./model/Projects')
const colab = require('./model/Colab_works')
const port = 3001;

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://0.0.0.0:27017/Portfolio')


app.get("/getskills", (req, res) => {
    skills.find({})
    .then(skills => res.json(skills))
    .catch(err => res.json(err))
})

app.get("/getMessages", (req, res) => {
    Messages.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.delete("/deleteMessage/:id", (req, res) => {    
    const {id} = req.params;
    Messages.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.post("/createMessage", (req, res) => {
    Messages.create(req.body)
    .then(messages=> res.json(messages))
    .catch(err => res.json(err))
})
app.post("/updateSocialMedia", (req, res) => {
    social_media.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get("/getSocialMedia" , (req, res) => {
    const id = '667791b395483bfc4c7ac7e1';
    social_media.findById({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post("/createAboutMe", (req, res) => {
    aboutMe.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.get("/getAbout", (req, res) => {
    aboutMe.find({})
    .then(result => res.json(result))
    .catch(err=> res.json(err))
})
app.post("/createProject", (req, res) => {
    project.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get("/getProjects", (req, res) => {
    project.find({})
    .then(projects => res.json(projects))
    .catch(err => res.json(err))
})


app.post("/createColabWorks", (req, res) => {
    colab.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.get("/getColabWorks", (req, res) => {
    colab.find({})
    .then(cworks => res.json(cworks))
    .catch(err => res.json(err))
})
app.post("/createskill", (req, res) => {
    skills.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log("server is running on 3001")
})
