
import Hotel from "../models/Hotels.js"

//create
export const createHotel = async (req,res,next)=>{
    const newhotel = new Hotel(req.body);
    try{    
        const savedhotel = await newhotel.save()
        res.status(200).json(savedhotel)   
    }catch(err) {
        next(err)
    }
}

//Update
export const UpdateHotel = async (req,res,next)=>{
    try{
        console.log(req.params.id)
        console.log(req.body.id)
        const updatenew = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true} )
        //const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updatenew)     
        console.log(updatenew)   
    }catch(err){
        next(err)
    }
};
//Delete
export const DeleteHotel = async (req,res,next)=>{
    try{
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(" Hotel deleted ")     
    }catch(err){
        next(err)
    }
}
//Get
export const GetHotel = async (req,res,next)=>{
    try{
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel)     
        console.log(getHotel)   
    }catch(err){
        next(err)
    }
}
//GetAll

export const GetHotels = async (req,res,next)=>{
    try{
        const getHotel = await Hotel.find()
        res.status(200).json(getHotel)     
        console.log(getHotel)   
    } catch(err){
        next(err)
    }
}