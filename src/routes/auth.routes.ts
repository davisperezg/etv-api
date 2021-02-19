import { Router } from "express";
const router = Router();
import passport from "passport";
import {
  MyAccessURL,
  ForbiddenUsuario,
  ForbiddenAdministrador,
  validateStateTw2,
} from "../middlewares/authJwt";
import * as authCtrl from "../controllers/auth.controller";

//Login
router.post("/v1/auth/signIn", authCtrl.signIn);
router.post("/v1/auth/token", authCtrl.token);

router.get(
  "/v1/auth/user",
  passport.authenticate("jwt", { session: false }),
  authCtrl.findUser
);

//Lista todos los usuarios
router.get(
  "/v1/users",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  authCtrl.findUsers
);

//Registra Usuarios
router.post(
  "/v1/auth/signUp",
  [
    MyAccessURL,
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
  ],
  authCtrl.signUp
);

//Update administradores
router.put(
  "/v1/user/:id",
  [
    MyAccessURL,
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
  ],
  authCtrl.updateUser
);

//Desconectar dispositivo
router.put(
  "/v1/disconnect",
  passport.authenticate("jwt", { session: false }),
  authCtrl.disconnectDevice
);

//Contar dispositivo
router.put(
  "/v1/amount/connected",
  passport.authenticate("jwt", { session: false }),
  authCtrl.contarAcceso
);

//Descontar dispositivo
router.put(
  "/v1/amount/disconnected",
  passport.authenticate("jwt", { session: false }),
  authCtrl.descontarAcceso
);

router.get(
  "/v1/user/:id",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  authCtrl.getUser
);

router.delete(
  "/v1/desactivate/user/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
  ],
  authCtrl.desactivateUser
);

router.delete(
  "/v1/activate/user/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
  ],
  authCtrl.activateUser
);

export default router;
