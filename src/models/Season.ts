import { Schema, model } from "mongoose";

const seasonSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      uppercase: true,
    },
    serie: {
      ref: "Serie",
      type: Schema.Types.ObjectId,
    },
    state: {
      type: Number,
      required: true,
      trim: true,
      default: 1,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Season", seasonSchema);
