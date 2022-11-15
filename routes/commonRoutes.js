const express = require("express");
const router = express.Router()
const UserRouter = require('./userRoutes')
const companyRouter =require('./companyRoutes')




router.use('/user',UserRouter)
router.use('/company',companyRouter)


module.exports = router

