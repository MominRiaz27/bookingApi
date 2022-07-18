import express from "express"
import { createRoom, DeleteRoom, Getroom, GetRooms, UpdateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyTokens.js";
 const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom)
//UPDATE
router.put("/:id", verifyAdmin, UpdateRoom)
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, DeleteRoom)
//GET
router.get("/:id", Getroom)
//GETALL
router.get("/", GetRooms)


 export default router;