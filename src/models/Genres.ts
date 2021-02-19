import { Schema, model } from "mongoose";

const genresSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Genres", genresSchema);
