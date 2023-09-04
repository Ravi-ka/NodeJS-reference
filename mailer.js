//Import nodemailer
const nodemailer = require('nodemailer');
const readline = require('readline');
// Configure email and send it
// sending email is a Async operation
async function sendMail(){
    //1. Create an email transporter
    // SMTP [Simple Mail Transfer Protocol]
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'ka.ravisankar@gmail.com',
            pass:'jiwwusngmhvprbob',
        }
    });

    const interface = readline.createInterface({
        input: process.stdin,
    	output: process.stdout,
    });

    interface.question("Enter the user email ",(userEmail)=>{
        const mailOptions = {
        from:'ka.ravisankar@gmail.com',
        to:userEmail,
        subject:'This is a NodeJS email using nodemailer',
        text:'This is a sample mail which is sent using the nodeJS',
    };
    try{
        const result = transporter.sendMail(mailOptions); //sendMail returns promises so it is captured in a variable with await
        console.log('Email sent Successfully');
    }
    catch(err){
        console.log("Email sending is failed"+err);
    }
    })
}

sendMail();