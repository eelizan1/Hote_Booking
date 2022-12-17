import express from "express";
import {
  createHotel,
  udpateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
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
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

export default router;
