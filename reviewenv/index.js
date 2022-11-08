const express= require("express")
const app= express()

app.get("/",function(req,res){
    res.send("welcome to js world")
})

app.post("/register",function(req,res){
    res.send("this is postman")

})

app.listen(8000, function(req ,res) {
    console.log ("server is running on pport 9000")
    })

   