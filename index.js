import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"; // from files add .js extensions
import usersRoute from "./routes/users.js"; // from files add .js extensions
import hotelsRoute from "./routes/hotels.js"; // from files add .js extensions
import roomsRoute from "./routes/rooms.js"; // from files add .js extensions

const app = express();
dotenv.config(); // connect to env data

// attempt to connect to mongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.log("Error connecting to mongoDB: {}", error);
    throw error;
  }
};

// disconnection and reconnected handling
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// mongoose.connection.on("connected", () => {
//   console.log("mongoDB connected!");
// });

// api middlewares from routes
app.use(express.json()); // allows us to send json requests from client

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("connected to backend! ");
});
