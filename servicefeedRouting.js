const express = require("express");
const nodemailer = require("nodemailer");

let Service = require("../modal/Serivce1");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vamshimamidala2521@gmail.com",
      pass: "yzxt xzld qxir wgwy",
    },
  });
  
let servicefeedRouting = express.Router()
servicefeedRouting.post("/", async (req, res) => {
    const { name, phone, email, address} = req.body;
  
    try {
      const service = new Service(req.body);
      const savedService = await service.save();
  
      const mailOptions = {
        from: "vamshimamidala2521@gmail.com",
        to: "vamshimamidala12@gmail.com",
        subject: "New service Received",
        text: `
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          Address: ${address}
         
        `,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Failed to send email" });
        } else {
          console.log("Email sent: " + info.response);
          return res.status(200).json({ message: "Service submitted and email sent", service: savedService});
        }
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Failed to submit service" });
    }
  });
  
  servicefeedRouting.get("",async(req,res)=>{
    let service = await Service.find();
    res.send(service);
})
servicefeedRouting.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    let service = await Service.deleteOne({_id:id});
    res.send(service)
})


 
module.exports = servicefeedRouting;