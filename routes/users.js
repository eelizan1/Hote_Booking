import express from "express";
import {
  udpateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// verify token
// hit end point -> verify token -> callback function executes
router.get("/checkAuthentication", verifyToken, (req, res, next) => {
  res.status(200).send("Hello, user. You are loggged in");
});

// UPDATE
router.put("/:id", udpateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);

export default router;
