let mongoose = require("mongoose");
let addofferSchema = new mongoose.Schema({
    offername:{
        type:String,
        required:true
    },
    couponcode:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("offers",addofferSchema)