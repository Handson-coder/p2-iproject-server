const nodemailer = require("nodemailer");

async function main(user, name, city) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GOOGLE_EMAIL, // generated ethereal user
      pass: process.env.GOOGLE_PASSWORD, // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: "handsonpanggabean2@gmail.com", // sender address
    to: `${user}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `
    This is your Travel detail that you've checked out
    Destination : ${name}
    City        : ${city}
    `, // plain text body
    html: `<b>
    This is your Travel detail that you've checked out
    Destination : ${name}
    City        : ${city}
    </b>`, // html body
  });
  console.log("Message sent: %s", info.messageId);  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

module.exports = main