import { Schema, model } from "mongoose";

const timeSchema = new Schema(
  {
    name: {
      type: String,
      requerid: true,
      trim: true,
      uppercase: true,
    },
    time: {
      type: Number,
      requerid: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Plans", timeSchema);
