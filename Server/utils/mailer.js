const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'nazarliaqat123@gmail.com',
    pass: 'nazarpak123'
  }
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'nazarliaqat123@gmail.com',
    to: to,
    subject: subject,
    text: text
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
