import { Schema, model } from "mongoose";

const chapterSchema = new Schema(
  {
    name: {
      type: String,
      requerid: true,
      trim: true,
      uppercase: true,
    },
    season: {
      ref: "Season",
      type: Schema.Types.ObjectId,
    },
    url: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
    },
    web: {
      type: String,
      trim: true,
      requerid: true,
    },
    server: {
      type: String,
      trim: true,
      requerid: true,
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
export default model("Chapter", chapterSchema);
