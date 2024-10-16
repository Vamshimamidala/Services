const express = require("express");
let Addcaterogy = require("../modal/addCaterogy");
const subcaterogyRouting = require("./subcatRouting");

let addcaterogyRouting = express.Router()

addcaterogyRouting.post("", async(req,res)=>{
    let addCaterogy = new Addcaterogy(req.body);
    let result =  await addCaterogy.save();
    res.send(result)
})
addcaterogyRouting.get("", async(req,res)=>{
    let addCaterogy= await Addcaterogy.find();
    res.send(addCaterogy)
})
addcaterogyRouting.delete("/:id",async(req,res)=>{
 let id= req.params.id;
 let addCaterogy= await Addcaterogy.deleteOne({_id:id});
 res.send(addCaterogy);
})
addcaterogyRouting.put("/:id", async(req,res)=>{
    let id=req.params.id;
    let addCaterogy = await Addcaterogy.updateOne({_id:id},{$set:req.body});
    res.send(addCaterogy)
})
addcaterogyRouting.get("/:name", async(req,res)=>{
    let name=req.params.name;
    let addCaterogy= await Addcaterogy.find({name:name});
   
    res.send(addCaterogy);
   })
module.exports= addcaterogyRouting;