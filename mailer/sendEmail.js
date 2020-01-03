const mailer = require('nodemailer');
const config = require('./config');

module.exports = content => {
    //  configure transporter
    return new Promise((resolve, reject) => {
        const transporter = mailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            service: 'gmail',
            auth: {
                user: config.user,
                pass: config.password // this is the APP_PASS variable set up in .env.yaml
            }
        });
    
        //  create recipient string
        let recipients = "";
        config.to.forEach(recipient => recipients += `${recipient} `);
        //  define email options 
        const mailOptions = {
            from: "keonespam@gmail.com",
            to: recipients,
            subject: content.subject,
            text: content.textBody,
            html: content.htmlBody
        }
        // send the email
        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('error sending email', JSON.stringify(error));
                reject(new Error(JSON.stringify(error)));
            } else {
                console.log( `Message ${info.messageId} send: ${info.response}`);
                resolve( `Message ${info.messageId} send: ${info.response}`);
            }
        });
    });
}