import { Schema, model } from "mongoose";

const countrySchema = new Schema(
  {
    name: String,
    cod:String,
    flag:String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default model("Country", countrySchema);
