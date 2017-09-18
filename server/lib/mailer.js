var nodemailer = require('nodemailer');

sendEmail = (title, body) => {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'johnmeguira@gmail.com',
                pass: 'jm140890'
            }
        });

        var mailOptions = {
            from: 'johnmeguira@gmail.com',
            to: 'johnmeguira@gmail.com, benadhoute@gmail.com',
            subject: title,
            text: body
        };

        transporter.sendMail(mailOptions, (error, response) =>{
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    })

}

module.exports = {sendEmail};