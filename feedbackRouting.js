const express = require("express");
const Feedback = require("../modal/feedModal");
const nodemailer = require("nodemailer");

const feedbackRouting = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vamshimamidala2521@gmail.com",
    pass: "yzxt xzld qxir wgwy",
  },
});

feedbackRouting.post("/", async (req, res) => {
  const { name, phone, email, address, ratesus } = req.body;

  try {
    const feedback = new Feedback(req.body);
    const savedFeedback = await feedback.save();

    const mailOptions = {
      from: "vamshimamidala2521@gmail.com",
      to: "vamshimamidala12@gmail.com",
      subject: "New Feedback Received",
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Address: ${address}
        Feedback: ${ratesus}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({ message: "Feedback submitted and email sent", feedback: savedFeedback });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to submit feedback" });
  }
});

feedbackRouting.get("",async(req,res)=>{
    let feedback = await Feedback.find();
    res.send(feedback)
})
feedbackRouting.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    let feedback = await Feedback.deleteOne({_id:id});
    res.send(feedback)
})
module.exports = feedbackRouting;
