const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: String,
    bio : String,
    descripition : String,
    github_link : String,
    image : String
})

const ProjectModel = mongoose.model("projects", ProjectSchema)

module.exports = ProjectModel