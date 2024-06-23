const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema({
    description : String
})

const aboutModel = mongoose.model("aboutmes", aboutSchema)
module.exports = aboutModel