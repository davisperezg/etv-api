import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
      required: true,
      unique: true,
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
    duration: {
      type: Number,
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
    typeVideo: {
      type: String,
      trim: true,
      requerid: true,
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Video", movieSchema);
