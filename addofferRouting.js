const express = require("express");
let Addoffer = require("../modal/addofferModal");

let addofferRouting = express.Router()

addofferRouting.post("",async(req,res)=>{
    let addoffer = new Addoffer(req.body);
    let result = await addoffer.save();
    res.send(result)
})
addofferRouting.get("", async(req,res)=>{
    let addoffer= await Addoffer.find();
    res.send(addoffer)
})
addofferRouting.delete("/:id",async(req,res)=>{
 let id= req.params.id;
 let addoffer= await Addoffer.deleteOne({_id:id});
 res.send(addoffer);
})
addofferRouting.put("/:id", async(req,res)=>{
    let id=req.params.id;
    let addoffer = await Addoffer.updateOne({_id:id},{$set:req.body});
    res.send(addoffer)
})

module.exports=addofferRouting;