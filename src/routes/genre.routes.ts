import { Router } from "express";
const router = Router();
import passport from "passport";
import {
  ForbiddenUsuario,
  ForbiddenAdministrador,
} from "../middlewares/authJwt";
import * as genreCtrl from "../controllers/genre.controller";

router.get(
  "/v1/genres",
  [passport.authenticate("jwt", { session: false })],
  genreCtrl.getGenres
);

router.get(
  "/v1/genre/:id",
  [passport.authenticate("jwt", { session: false }), ForbiddenUsuario],
  genreCtrl.getGenre
);

export default router;
