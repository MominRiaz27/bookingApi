import express from "express"
import { UpdateUser,DeleteUser,GetUser,GetUsers } from "../controllers/user.js";
import { verifyAdmin, verifytoken, verifyUser } from "../utils/verifyTokens.js";

 const router = express.Router();

// router.get("/checktoken",verifytoken, (req,res,next)=>{
//     res.send(" Helow user you're Loggedin ")
// })
// router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
//     res.send(" Helow user you're Logged in and you can delete your account ");
// })
// router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
//     res.send(" Helow Admin you're Logged in and you can delete All accounts ");
// })



//UPDATE
router.put("/:id", verifyUser, UpdateUser)
//DELETE
router.delete("/:id",verifyUser, DeleteUser)
//GET
router.get("/:id", verifyUser, GetUser)
//GETALL
router.get("/", verifyAdmin, GetUsers)

 export default router;