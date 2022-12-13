import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// verify authentication
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  // check if we even have a token
  if (!token) return next(401, "You are not authenticated!");

  // verify token
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is invalid!"));

    // assinging a new property "user" to req
    req.user = user;
    next();
  });
};
