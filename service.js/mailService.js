var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nilesh528goud@gmail.com",
    pass: "fuijfejxzsmhhiol",
  },
});

var mailOptions = {
  from: "nilesh528goud@gmail.com",
  to: "nilesh525goud@gmail.com",
  subject: "hii this is scheduled mail ",
  text: "mail transfer successfully",
};

module.exports = {
  transporter,
  mailOptions,
};
