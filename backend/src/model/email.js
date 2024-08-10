import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Email = mongoose.model("Email", emailSchema);

export default Email;
