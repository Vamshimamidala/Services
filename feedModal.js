let mongoose = require("mongoose");
let feedbackSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    ratesus:{
        type:String,
        required:true
    },
    
})
module.exports= mongoose.model("feedbacks",feedbackSchema)