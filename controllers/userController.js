const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken") ;
const User = require("../model/user_Schema");
const user_schema = require("../model/user_Schema");
const { transporter, mailOptions } = require("../service.js/mailService");
const cron=require("node-cron");
const { use } = require("bcrypt/promises");

const userSignup = async (req, resp) => {
  const { email, password } = req.body;
  const User = new user_schema(req.body)
  console.log(req.body.name)

try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return resp.status(400).json({ status: 400, error: "email already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    const addRess = await user.save();
    resp.json(addRess)
  }
  catch (err) {
    resp.send("Error"+err);
  }
}

const userLogin=async(req,resp)=>{
  try{
    const {email,password}=req.body
    //console.log(email,password)
    if(email&&password) {
      const user = await User.findOne({email:email});
      if(user != null){
        const isMatch = await bcrypt.compare(password,user.password)
        if(user.email === email && isMatch){
          const token = jwt.sign({userID:user._id},
            process.env.JWT_SECRET_KEY,{expiresIn:"5d"})
        resp.send({status: "success", message: "login success","token":token });
      }else{
        resp.send({
          status : "failed",
          message: "email is password is not valid"
        })
      }
    }else{
      resp.send({status:"failed", message: "you are not register user"})
    }
  }
}catch(err){
  resp.send("error" +err)
}
}    



const sendUserResetPasswordEmail = async (req,resp)=>{
  
    const {email}=req.body
    if(email){
      const user= await User.findOne({email:email});
      if (user){
        const secret = user.id +process.env.JWT_SECRET_KEY
        const token = jwt.sign({userID : user.id},secret,{expiresIn:'15'})
        const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
        console.log("link:",link);

        //send mail
        console.log(user.email)
        let info = await transporter.sendMail({
          from : "nilesh525goud@gmail.com",
          to :user.email,
          subject : "passsword reset link",
          html : `<a href=${link}>click here to reset password </a>`
        })
        resp.send({status : "success", message : "password email link sent successfully",info:info})
      }
      else{
        resp.send({status:"failed","message":"email is required"})
      }
    }

  }

  const userPasswordReset = async (req,resp)=>{
    const {password,confirm_password} =req.body
    const {id,token}=req.params
    const user= await user.findbyId(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY

    try{
      jwt.verify(token,new_secret)
      if(password&&confirm_password){
        if(password!==confirm_password){
        resp.send({status:"failed",message:"password and confirm password should be same"})
      }else{
        const salt=await bcrypt.genSalt(10);
        var new_password = await bcrypt.hash(password,salt);
        await user.findbyIdAndUpdate(user._id,{$set:{password:new_password}});
       resp.send({status:"success",message:"password reset successfully"})

}

}else{
      resp.send({status:"failed",message:"all field are required"})
    }
    
  
   } catch(err){
    console.log("error"+err)
   }
  }
  





const sendMail = async (req, resp) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent Successfully" + info.response);
    }
  });
};



//cron.schedule("8 17 * * *",function(req,resp){
  //sendMail()
     //console.log("this is scheduled mail at 5PM")
     
//}); 

module.exports = {
  userSignup,
  sendMail,
  userLogin,
  sendUserResetPasswordEmail,
  userPasswordReset
};
