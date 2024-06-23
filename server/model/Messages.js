const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    name : String,
    email : String,
    subject : String,
    content : String,
    date : {
        type : Date,
        default : Date.now
    }
})
const MessageModel = mongoose.model("messages", MessageSchema)
module.exports = MessageModel