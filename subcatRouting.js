const express = require("express");
let Subcaterogy = require("../modal/subcatModal");
 
let subcaterogyRouting = express.Router()

subcaterogyRouting.post("",async(req,res)=>{
  let  subcaterogy = new Subcaterogy(req.body);
  let result = await subcaterogy.save();
  res.send(result);
})
subcaterogyRouting.get("",async(req,res)=>{
    let subcaterogy = await Subcaterogy.find();
    res.send(subcaterogy);
})
subcaterogyRouting.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    let subcaterogy = await Subcaterogy.deleteOne({_id:id});
    res.send(subcaterogy);
})
subcaterogyRouting.put("/:id",async(req,res)=>{
    let id = req.params.id;
    let subcaterogy = await Subcaterogy.updateOne({_id:id},{$set:req.body});
    res.send(subcaterogy)
})

subcaterogyRouting.get("/:subname", async(req,res)=>{
    let name=req.params.subname;
    let subcaterogy= await Subcaterogy.find({subname:name});
    res.send(subcaterogy);
   })

module.exports=subcaterogyRouting;