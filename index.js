const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
require("./model/config");
var bodyparser = require("body-parser");
const router = require("./routes/commonRoutes");
const cron = require("node-cron");


const app = express();
app.use(bodyparser.json());

app.use("/", router);


//cron.schedule("*/5 * * * * *",function(req,resp){
  //console.log("scheduled msg received success")
//}) 
 

 app.listen(process.env.PORT, function (req, resp) {
  console.log(`server is running on port: ${process.env.PORT}`);
});
