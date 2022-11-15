const jwt = require("jsonwebtoken");
const user= require("../model/user_Schema");
const checkUserAuth = async (req,resp,next)=>{
    let token;
    const{authorization} = req.header;
    if(authorization && authorization.startsWith("Bearer")){
        try{
            token = authorization.split(" ")[1];
            console.log('token:',token);
            console.log('Authorization:',authorization);
            const {userID} = jwt.verify(token,process.env.JWT_SECRET_KEY);

        
            req.user = await user.findById(userID).select('-password');
            next();
        }
        catch(error){
            console.log(error);
            resp.status(401).send({status : "failed", message : "unauthoriseduser"});
        }
    }
    if (!token){
        resp.status(401).send({meassage : "unauthorisde user no token"})
    }
};


module.exports=checkUserAuth

