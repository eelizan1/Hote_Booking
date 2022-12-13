import express from "express";
import {
  createHotel,
  udpateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
// note - use async since we're interacting with db and will take time
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, udpateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

export default router;
