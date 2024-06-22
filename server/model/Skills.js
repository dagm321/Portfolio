const mongoose = require('mongoose')

const SkillSchema = new mongoose.Schema({
    title : String,
    rating : Number,
    logo : String
})

const SkillModel = mongoose.model("skills", SkillSchema)
module.exports = SkillModel
