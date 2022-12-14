import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // array of all room numbers
    // [
    //     {number: 101, unavailableDates:[01.05.2022, 02.01.2022]},
    //     {number: 101, unavailableDates:[01.05.2022, 02.01.2022]},
    // ]
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
