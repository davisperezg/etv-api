import { Router } from "express";
const router = Router();
import passport from "passport";
import {
  ForbiddenUsuario,
  ForbiddenAdministrador,
  ForbiddenDistribuidor,
  validateStateTw2,
} from "../middlewares/authJwt";
import * as videoCtrl from "../controllers/video.controller";

router.get(
  "/v1/videos",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  videoCtrl.getVideos
);

router.get(
  "/v1/all/videos",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  videoCtrl.getAllVideos
);

//Por revisar
router.get(
  "/v1/video/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenDistribuidor,
    ForbiddenUsuario,
  ],
  videoCtrl.getVideo
);

router.post(
  "/v1/video",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  videoCtrl.createVideo
);

router.delete(
  "/v1/video/activate/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  videoCtrl.activateVideo
);

router.delete(
  "/v1/video/desactivate/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  videoCtrl.desactivateVideo
);

router.put(
  "/v1/video/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  videoCtrl.updateVideo
);

export default router;
