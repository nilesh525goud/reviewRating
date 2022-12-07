const bcrypt=require('bcrypt')
const User=require('../model/User_Schema')
const userSchema=require("../model/User_Schema")
const {transporter,mailOptions}=require('../service/mailService')
const cron=require('node-cron')


const userSignup=async(req,res)=>{
    const {user_email,password}=req.body
    const userdata=new userSchema(req.body)
    console.log(req.body)
    try{
       const userExits=await User.findOne({user_email:req.body.user_email})
       if(userExits){
      return res.status(400).json({status:400,error:"Email aleady exit"})
      }
      const salt=await bcrypt.genSalt(10)
      userdata.password=await bcrypt.hash(password,salt)
  
      const addData=await userdata.save()
      res.json(addData)
    }catch(err){
      res.send("Error"+err)
    }
  
  }

  
  const sendMail=async(req,res)=>{
    transporter.sendMail(mailOptions,(error,info)=>{
      if(error){
        console.log(error)
      }else{
        console.log("email Sent succesfully"+info.response)
      }
    })
  }
  
  cron.schedule(" * 17 * * *",function(){
    console.log("running  a task in  5 clock ")
    sendMail()
})

  module.exports={
    userSignup,
    sendMail
  }