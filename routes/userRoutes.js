const express = require("express");
const router = express.Router()
const user = require('../controllers/userController')
const validation = require('../validation/users/user_Validation')


router.post('/registerUser', user.userSignup)


router.post("/register",validation.registerUserValidation,user.userSignup)


module.exports = router;