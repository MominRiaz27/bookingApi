import  jwt  from "jsonwebtoken";
import { createError }  from "../utils/error.js";

export const verifytoken = ( req , res , next)=>{
    const token = req.cookies.access_token;    
    if(!token)
    {
        return next(createError( 401 ," You're not authenticated "));
    }
    jwt.verify(token,"secret-key", (err, user)=>{
        if(err) return next(createError( 403 ," token not valid "));
        req.user = user;
        console.log( "inside token")
        next();
    });
}
export const verifyUser = ( req , res , next ) => {
    verifytoken(req,res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            console.log("inside user verify")
            next();
        }else{+
            console.log("inside user verify error")
            return next(createError(404," You're not authorized "))
        }
    })
}

export const verifyAdmin = ( req , res , next ) => {
    console.log("inside admin 1")
    verifytoken(req,res, () => {
        console.log("inside admin")
        console.log(req.user.isAdmin)
        if(req.user.isAdmin){
            console.log("inside Admin verify");
            next();
        }else{
            console.log("inside Admin verify error")
            return next(createError(403," You're not authorized "))
        }
    })
}
