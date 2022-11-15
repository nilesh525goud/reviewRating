const user = require('./user_Schema')



module.exports = {
    registerUserValidation : async (req,resp, next)=>{
        const value= await user.registerUser.validate(req.body,{aboutEarly : false})
        if(value.error){
            resp.json({
                success : 0,
                message : value.error.details[0].message
            })
        }else{
            next()
        }
    },


    userLoginValidation : async (req,resp,next)=>{
        const value = await user.userLogin.validate(req.body)
        if(value.error){
            resp.json({
                success : 0,
                message : value.error.details[0].message
            })
            }else{
                next()
            }
        }


}



