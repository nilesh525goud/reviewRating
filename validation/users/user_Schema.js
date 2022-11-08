const joi = require("@hapi/joi")

const schema = {
    registerUser : joi.object({
        name: joi.string().max(20).required(),
        phone   : joi.number().integer().min(1000000000).max(9999999999).message("invalid mobile no.").required(),
        email: joi.string().email().max(20).required(),
        password : joi.string().min(6).required(),
        city : joi.string().required(),
        state: joi.string().required()
    }) .unknown(true),


}
module.exports= schema