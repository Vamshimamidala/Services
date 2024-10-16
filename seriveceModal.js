let mongoose = require("mongoose");
let serviceSchema= new mongoose.Schema({
    catname :{
        type:String,
        required:false
    },
    subname:{
        type:String,
        required:false
    },
    comname:{
        type:String,
        required:true
    },
    servicename:{
        type:String,
        required:true
    },
    serivceaddress:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
})
module.exports = mongoose.model("services",serviceSchema);