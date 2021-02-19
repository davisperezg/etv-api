import { Router } from "express";
const router = Router();
import passport from "passport";
import {
  ForbiddenUsuario,
  ForbiddenAdministrador,
} from "../middlewares/authJwt";
import * as countryCtrl from "../controllers/country.controller";

router.get(
  "/v1/countrys",
  [passport.authenticate("jwt", { session: false }), ForbiddenUsuario],
  countryCtrl.getCountrys
);

router.get(
  "/v1/country/:id",
  [passport.authenticate("jwt", { session: false }), ForbiddenUsuario],
  countryCtrl.getCountry
);

export default router;
