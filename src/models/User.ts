import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    state: {
      type: Number,
      requerid: true,
    },
    timeExpiration: {
      ref: "Plans",
      type: Schema.Types.ObjectId,
    },
    contAccess: {
      type: Number,
      default: 0,
    },
    cantOrtorgada: {
      type: Number,
    },
    cantSobrante: {
      type: Number,
    },
    ide: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    cod_ide: {
      type: Number,
      requerid: true,
    },
    username: {
      type: String,
      unique: true,
      required: [true, "Completar username"],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
    },
    role: {
      ref: "Role",
      type: Schema.Types.ObjectId,
    },
    cod: {
      type: Number,
      requerid: true,
    },
    iniciaPlan: {
      type: Date,
    },
    celular: {
      type: String,
      unique: true,
      required: [true, "Completar celular"],
      lowercase: true,
      trim: true,
    },
    terminaPlan: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("User", userSchema);
