import express from "express";
import {
  udpateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// verify token
// hit end point -> verify token -> callback function executes
router.get("/checkAuthentication", verifyToken, (req, res, next) => {
  res.status(200).send("Hello, user. You are loggged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete you're account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all account");
});

// UPDATE
router.put("/:id", verifyUser, udpateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyAdmin, getUser);

// GET ALL
router.get("/", getUsers);

export default router;
