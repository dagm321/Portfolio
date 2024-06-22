const mongoose = require('mongoose')

const AboutSchema = new mongoose.Schema({
    titles : String
})

const AboutModel = mongoose.model("about", AboutSchema)
module.exports = AboutModel