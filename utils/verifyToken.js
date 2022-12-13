import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// verify authentication
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  // check if we even have a token
  if (!token) return next(createError(401, "You are not authenticated!"));

  // verify token
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is invalid!"));

    // assinging a new property "user" to req
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  // check token first
  verifyToken(req, res, next, () => {
    // can modify/delete account if user is it's own user or admin
    if (req.user.id == req.params.id || req.user.isAdmin) {
      // req.params.id comes from :id in the route
      // eq.user.id comes from jwt token
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  // check token first
  verifyToken(req, res, next, () => {
    // can modify/delete account if user is it's own user or admin
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
