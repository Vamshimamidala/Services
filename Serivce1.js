let mongoose = require("mongoose");
let servicefeedSchema= new mongoose.Schema({
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
    
    
})
module.exports= mongoose.model("servicfeeds",servicefeedSchema)