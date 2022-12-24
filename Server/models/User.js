import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      // hotel name
      type: String,
      required: true,
      unique: true,
    },
    email: {
      // hotel name
      type: String,
      required: true,
      unique: true,
    },
    password: {
      // hotel name
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // additional properties for the schema
);

// export using mongoose
export default mongoose.model("User", UserSchema);
