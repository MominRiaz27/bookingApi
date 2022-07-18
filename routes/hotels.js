import express, { application } from "express"
import { createHotel, DeleteHotel, GetHotel, GetHotels, UpdateHotel } from "../controllers/hotel.js";
 const router = express.Router();
import Hotel from "../models/Hotels.js"
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyTokens.js";

//CREATE
router.post("/", verifyAdmin, createHotel)
//UPDATE
router.put("/:id", verifyAdmin, UpdateHotel)
//DELETE
router.delete("/:id", verifyAdmin, DeleteHotel)
//GET
router.get("/:id", GetHotel)
//GETALL
router.get("/", GetHotels)

 export default router;