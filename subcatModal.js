let mongoose = require("mongoose");
let subcaterogySchema= new mongoose.Schema({
    subname:{
        type:String,
        required:true
    },
    subdes:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    
})
module.exports= mongoose.model("subcaterogys",subcaterogySchema)