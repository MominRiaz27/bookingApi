import Hotels from "../models/Hotels.js"
import Room from "../models/Rooms.js"
import { createError } from "../utils/error.js";


export const createRoom = async (req, res, next) =>{

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    
    try{
        const savedRoom = await newRoom.save();
        try {
            await Hotels.findByIdAndUpdate(hotelId, { $push: {rooms: savedRoom._id} })
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
}


//Update
export const UpdateRoom = async (req,res,next)=>{
    try{
        console.log(req.params.id)
        console.log(req.body.id)
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true} )
        //const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updateRoom)     
        console.log(updateRoom)   
    }catch(err){
        next(err)
    }
};
//Delete
export const DeleteRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelid;
    try{
        const deleteRoom = await Room.findByIdAndDelete(req.params.id)
        res.status(200).json(" Room deleted ")
        try {
            await Hotels.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
        } catch (err) {
            next(err)
        }     
    }catch(err){
        next(err)
    }
}
//Get
export const Getroom = async (req,res,next)=>{
    try{
        const getRoom = await Room.findById(req.params.id)
        res.status(200).json(getRoom)     
        console.log(getRoom)   
    }catch(err){
        next(err)
    }
}
//GetAll

export const GetRooms = async (req,res,next)=>{
    try{
        const getRooms = await Room.find()
        res.status(200).json(getRooms)     
        console.log(getRooms)   
    } catch(err){
        next(err)
    }
}