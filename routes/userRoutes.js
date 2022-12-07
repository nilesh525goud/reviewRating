const express=require('express')
const router=express.Router()
const user=require('../controllers/userControllers')
const validation=require("../validation/users/user_validation")


router.post('/registerUser',validation.registerUserValidation,user.userSignup)
// router.get('/sendMail', user.sendMail)

module.exports=router;