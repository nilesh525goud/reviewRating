var nodemailer=require('nodemailer')

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"narendracharan25753@gmail.com",
        pass:"wlrvoxredempejek"
    }
});


var mailOptions={
    from:"narendracharan25753@gmail.com",
    to:"sandeep.solanki1108@gmail.com",
    subject:"Hye this is test mail",
    text:"hye it is my program Mail"
}

module.exports={
    transporter,
    mailOptions
}