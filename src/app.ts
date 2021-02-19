import express from "express";
import morgan from "morgan";
import cors from "cors";
import videoRoutes from "./routes/video.routes";
import authRoutes from "./routes/auth.routes";
import genreRoutes from "./routes/genre.routes";
import countryRoutes from "./routes/country.routes";
import roleRoutes from "./routes/role.routes";
import planRoutes from "./routes/plans.routes";
import serieRoutes from "./routes/serie.routes";
import {
  createRoles,
  createGenre,
  createCountry,
  createPlans,
} from "./libs/initialSetup";
import passport from "passport";
import passportModdleware from "./middlewares/passport";
import helmet from "helmet";
//import bodyParser from "body-parser"

const app = express();
createRoles();
createGenre();
createCountry();
createPlans();
app.set("port", process.env.PORT || 5000);

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportModdleware);
app.use(authRoutes);
app.use(videoRoutes);
app.use(genreRoutes);
app.use(countryRoutes);
app.use(roleRoutes);
app.use(planRoutes);
app.use(serieRoutes);

export default app;
