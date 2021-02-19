import { Router } from "express";
const router = Router();
import passport from "passport";
import {
  MyAccessURL,
  ForbiddenUsuario,
  ForbiddenAdministrador,
} from "../middlewares/authJwt";
import * as planCtrl from "../controllers/plans.controllers";

//Lista roles
router.get(
  "/v1/plans",
  [passport.authenticate("jwt", { session: false }), ForbiddenUsuario],
  planCtrl.findPlans
);

export default router;
