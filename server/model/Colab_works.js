const mongoose = require('mongoose')

const ColabSchema = new mongoose.Schema({
    title : String,
    description : String,
    image : String
})

const ColabModel = mongoose.model("collaboration_works", ColabSchema)
module.exports = ColabModel