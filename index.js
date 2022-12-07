const express=require('express')
var bodyParser=require("body-parser")
const app=express()
require('./model/config')
app.use(bodyParser.json())
const router=require('./routes/userRoutes')
const cron=require('node-cron')

//   const cronMail =(req,res)=>{
//     console.log("running a task evry 10 second ")
//     sendMail()
//        console.log("running a task evry 10 second ")
//      }
// cron.schedule("*/10 * * * * *",function(){
//     cronMail()
// })



app.use('/',router)


app.listen(8000,(req,res)=>{
    console.log('Server run in port no:8000')
})