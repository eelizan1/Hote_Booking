import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: {
    // hotel name
    type: String,
    required: true,
  },
  type: {
    // hotel, cabin, or apartment etc.
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String], // will contain room id's from Room.js
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

// export using mongoose
export default mongoose.model("Hotel", HotelSchema);

// 46.25
