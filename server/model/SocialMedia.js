const mongoose = require('mongoose')

const SMSchema = new mongoose.Schema({
    linkedin : String,
    instagram : String,
    telegram : String,
    github : String,
    x : String
})

const SMModel = mongoose.model("social_media", SMSchema)
module.exports = SMModel