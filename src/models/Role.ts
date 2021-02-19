import { Schema, model } from "mongoose";

const roleSchema = new Schema(
  {
    name: String,
    nivel: { type: Number, trim: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Role", roleSchema);
