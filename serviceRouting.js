const express = require("express");
let Service = require("../modal/seriveceModal");
 
let serviceRouting = express.Router()
serviceRouting.post("",async(req,res)=>{
    let service = new Service(req.body);
    let result = await service.save();
    res.send(result)
})
serviceRouting.get("",async(req,res)=>{
    let service = await Service.find();
    res.send(service);
})
serviceRouting.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    let service = await Service.deleteOne({_id:id});
    res.send(service)
})
serviceRouting.put("/:id",async(req,res)=>{
    let id = req.params.id;
    let service = await Service.updateOne({_id:id},{$set:req.body});
    res.send(service)
})
serviceRouting.get("/:subname", async(req,res)=>{
    let subname =req.params.subname;
    let service= await Service.find({subname:subname});
    res.send(service);
   })
module.exports = serviceRouting;