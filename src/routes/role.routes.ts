import { Router } from "express";
const router = Router();
import passport from "passport";
import {
  MyAccessURL,
  ForbiddenUsuario,
  ForbiddenAdministrador,
} from "../middlewares/authJwt";
import * as roleCtrl from "../controllers/role.controller";

//Lista roles
router.get(
  "/v1/roles",
  [passport.authenticate("jwt", { session: false }), ForbiddenUsuario],
  roleCtrl.findRoles
);

export default router;
