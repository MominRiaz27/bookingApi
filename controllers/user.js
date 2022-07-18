
import User from "../models/Users.js"


//Update
export const UpdateUser = async (req,res,next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedUser)     
        console.log(updatedUser)   
    }catch(err){
        next(err)
    }
}
//Delete
export const DeleteUser = async (req,res,next)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(" users deleted ")     
    }catch(err){
        next(err)
    }
}
//Get
export const GetUser = async (req,res,next)=>{
    try{
        const getUser = await User.findById(req.params.id)
        res.status(200).json(getUser)     
        console.log(getUser)   
    }catch(err){
        next(err)
    }
}
//GetAll

export const GetUsers = async (req,res,next)=>{
    try{
        const getUsers = await User.find()
        res.status(200).json(getUsers)     
        console.log(getUsers)   
    } catch(err){
        next(err)
    }
}