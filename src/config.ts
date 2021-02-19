import { config } from "dotenv";

if (process.env.NODE_ENV == "production") {
  config();
}

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "ethantv",
  MONGO_USER: process.env.MONGO_USER || "",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  SECRET_KEY: process.env.SECRET_KEY || "TOKEN_DEV",
  EXPIRE_KEY: process.env.EXPIRE_KEY || "30m",
};
