// require nodemailer
var nodemailer = require('nodemailer');
require('dotenv').config()

//Create a Transporter (SMTP Configuration)
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: 'shafeeqmohamed111@gmail.com',
  to: ['szsz0043@gmail.com','kp.shafeeqmohamed@gmail.com'],
  subject: 'ScrumX Invitation to Two Members',
  text: 'Attempt by App password. This is an invitation from ScrumX to multiple members.',
  html: `
    <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 20px; border-radius: 10px; color: white; text-align: center;">
      <h1 style="color: #ffcc00; font-size: 28px;">Welcome to ScrumX!</h1>
      <p style="font-size: 18px;">You have been invited to join ScrumX.</p>
      <p style="font-size: 16px;">Start collaborating and managing your projects effectively.</p>
      <a href="www.google.com" style="display: inline-block; background: #ffcc00; color: #333; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px; margin-top: 10px;">Get Started</a>
    </div>
  `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' , info);
  }
});