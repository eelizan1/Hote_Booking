import express from "express";

const router = express.Router();

// host:8800/api/auth
router.get("/", (req, res) => {
  res.send("hello, this is the auth api");
});

// host:8800/api/auth/register
router.get("/register", (req, res) => {
  res.send("Hello, this is auth register endpoint");
});

export default router;
