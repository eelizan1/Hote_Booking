import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// host:8800/api/auth
router.get("/", (req, res) => {
  res.send("hello, this is the auth api");
});

// host:8800/api/auth/register
router.post("/register", register);

router.post("/login", login);

export default router;
