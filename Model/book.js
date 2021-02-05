const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    b_title :String,
    b_qty:Number,
    b_author:String,
    b_audition:Number,
    b_cost:Number
},{timestamp:true});

module.exports = mongoose.model("Book",bookSchema)