const nodemailer = require("nodemailer");

const send = (fromAddr, toAddr, mailPass, message) => {
    const options = {
        from: fromAddr,
        to: toAddr,
        subject: "Lab05 task #3",
        text: message,
    };
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        service: "Gmail",
        auth: {
            user: fromAddr,
            pass: mailPass,
        },
    });


    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
}

module.exports.send = send;