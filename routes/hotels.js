import express from "express";
import {
  createHotel,
  udpateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelController.js";

const router = express.Router();

// CREATE
// note - use async since we're interacting with db and will take time
router.post("/", createHotel);

// UPDATE
router.put("/:id", udpateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

export default router;
