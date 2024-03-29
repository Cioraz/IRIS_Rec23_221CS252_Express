//import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');

const sendMail = async (studentEmail, regNum, rollNum) => {
    // create reusable transporter object using the default SMTP transport
    let smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'careerdevelopmentiris@gmail.com',
            pass: 'xrncslzfkvjkrpwq'
        }
    };
    let transporter = nodemailer.createTransport(smtpConfig);

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Career Development Center (IRIS)" <CDC_IRIS@gmail.com>', // sender address
        to: studentEmail, // list of receivers
        subject: "Registered Succesfully!", // Subject line
        text: "You have been registered on the IRIS Database.", // plain text body
        html: `<h1>You have Successfully Registered on IRIS Database. Your Registration number is ${regNum} and your roll number is ${rollNum}</h1>`, // html body
    });
    console.log(info.messageId);
}

// Exporting the function
module.exports = sendMail;