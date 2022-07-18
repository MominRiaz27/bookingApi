import express from "express"
const app = express()
import mongoose from "mongoose"
import authRouter from "./routes/auth.js"
import roomsRouter from "./routes/rooms.js"
import hotelsRouter from "./routes/hotels.js"
import userRouter from "./routes/users.js"
import cookieParser from "cookie-parser";


const url= "mongodb://localhost:27017";

const connect = async () =>{
    try{
        await mongoose.connect(url);
        console.log("connected to mongodb");
    }catch(error){
        throw(error);
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log(" mongodb disconnected ")
})


mongoose.connection.on("connected", ()=>{
    console.log(" mongodb connected ")
})

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/hotels", hotelsRouter);

app.use((err,req,res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.errormessage || " Something Went Wrong "
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    })
})

app.listen(8800,()=>{
    connect();
    console.log(" connected to backend  ")
})

app.get("/",(req,res)=>{
    res.send(" Helow first request ");
})