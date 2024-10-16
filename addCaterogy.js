let mongoose = require("mongoose");
let addcaterogySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    
})
module.exports= mongoose.model("addcaterogy",addcaterogySchema)