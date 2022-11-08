const express = require("express");
require("./model/config");
const mongoose = require("mongoose");
var bodyparser = require("body-parser");
const router = require("./routes/userRoutes");

//const review_Schema = require("./model/userSchema");
//const user_schema = require("./model/user_schema");
//const User = require('./model/user_schema');
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());

app.use("/", router);

app.get("/", function (req, resp) {
  resp.send("Review and rating");
});

/*app.post("/registeruser", async (req, resp) => {
  const {email,password}=req.body
  const user = new user_schema({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password : req.body.password,
    city: req.body.city,
    state: req.body.state
  })


  console.log(req.body.name);


  try {
    console.log("inside try");
    const userExist = await User.findOne({email :req.body. email})
    if (userExist) {
      return resp.status(400).json({status : 400, error : "email already exist"})
    }
  
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password,salt);
    
    const addRess = await user.save();
    console.log("after try");
    resp.send(addRess);
  } catch (err) {
    resp.send("Error");
  }


 

}) */

app.listen(9000, function (req, resp) {
  console.log("server is running on port 9000");
});
