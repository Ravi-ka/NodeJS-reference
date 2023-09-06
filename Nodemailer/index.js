// Import the necessary modules here
// const nodemailer = require('nodemailer');
// const readline = require('readline');
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj',
    },
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Please enter your mail ', (recipientEmail) => {
    const mailOptions = {
      from: 'codingninjas2k16@gmail.com',
      to: recipientEmail,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Success: Email sent to '+recipientEmail );
      }

      rl.close();
    });
  });
};

export default Solution;
