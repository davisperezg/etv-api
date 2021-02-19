import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      //authSource: "admin",
      user: config.MONGO_USER,
      pass: config.MONGO_PASSWORD,
    };
    //+srv to mongoatlas
    const db = await mongoose.connect(
      `mongodb+srv://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      mongooseOptions
    );

    console.log("Database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
