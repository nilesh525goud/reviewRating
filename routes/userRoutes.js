const express = require("express");
const router = express.Router()
const user = require('../controllers/userController')
const validation = require('../validation/users/user_Validation')




router.post("/register",validation.registerUserValidation,user.userSignup)

router.get("/send",user.sendMail)

router.post('/login',validation.userLoginValidation,user.userLogin)
router.post("/send-reset-password-email",user.sendUserResetPasswordEmail)
router.post('/reset-password/:id/:token',user.userPasswordReset)


module.exports = router






  