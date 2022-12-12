import express from "express";
import {
  udpateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

// UPDATE
router.put("/:id", udpateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);

export default router;
