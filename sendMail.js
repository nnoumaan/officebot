const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  // console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'buford28@ethereal.email',
        pass: 'anzhasCMa9HCAZhB6g'
    }
});

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Noumaan Ansari 👻" <noumaan.ansari@gmail.com>', // sender address
    to: `${req.body.to}`, // list of receivers
    subject: `${req.body.subject}`, // Subject line
    text: `${req.body.body}`, // plain text body
    html: "<b>Result send</b>", // html body
  });
  res.status(200).json({
    success: true,
    message: "Data REcieved",
  });
};
module.exports = sendMail;
