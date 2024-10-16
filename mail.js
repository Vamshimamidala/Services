 
 // feedbackRouting.js
const express = require('express');
const nodemailer = require('nodemailer');

const mail = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'vamshimamidala2521@gmail.com', // Your email address
    pass: 'yzxt xzld qxir wgwy',  // Your email password (use an app-specific password if using Gmail)
  },
});

mail.post('/', (req, res) => {
  const { name, phone, email, address, ratesus } = req.body;

  const mailOptions = {
    from: 'vamshimamidala2521@gmail.com',
    to: 'vamshimamidala12@gmail.com', // Where the feedback should be sent
    subject: 'New Feedback Received',
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
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Feedback submitted and email sent' });
    }
  });
});

module.exports = mail;
