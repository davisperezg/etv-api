import { Schema, model } from "mongoose";

const serieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    state: {
      type: Number,
      required: true,
      trim: true,
      default: 1,
    },
    description: {
      type: String,
    },
    country: {
      ref: "Country",
      type: Schema.Types.ObjectId,
    },
    genres: [
      {
        ref: "Genres",
        type: Schema.Types.ObjectId,
      },
    ],
    year: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Serie", serieSchema);
