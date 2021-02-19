import { Router } from "express";
const router = Router();
import passport from "passport";
import {
  ForbiddenUsuario,
  ForbiddenAdministrador,
  ForbiddenDistribuidor,
  validateStateTw2,
} from "../middlewares/authJwt";
import * as serieCtrl from "../controllers/serie.controller";

//GET ID
router.get(
  "/v1/serie/:id",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  serieCtrl.getSerie
);

router.get(
  "/v1/chapter/:id",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  serieCtrl.getChapter
);

router.get(
  "/v1/season/:id",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  serieCtrl.getSeason
);

//GET LIST
router.get(
  "/v1/series",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  serieCtrl.getSeries
);

router.get(
  "/v1/seasons/serie/:id",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  serieCtrl.getSeasonXSerie
);

router.get(
  "/v1/chapters/season/:id",
  [passport.authenticate("jwt", { session: false }), validateStateTw2],
  serieCtrl.getChaptersXSeason
);

//GET POST
router.post(
  "/v1/serie",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.createSerie
);

router.post(
  "/v1/season",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.createSeason
);

router.post(
  "/v1/chapter",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.createChapter
);

//ACTIVAR Y DESACTIVAR
router.delete(
  "/v1/activate/serie/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.activateSerie
);

router.delete(
  "/v1/activate/season/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.activateSeason
);

router.delete(
  "/v1/activate/chapter/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.activateChapter
);

router.delete(
  "/v1/desactivate/serie/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.desactivateSerie
);

router.delete(
  "/v1/desactivate/season/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.desactivateSeason
);

router.delete(
  "/v1/desactivate/chapter/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.desactivateChapter
);

//UPDATES
router.put(
  "/v1/serie/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.updateSerie
);

router.put(
  "/v1/season/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.updateSeason
);

router.put(
  "/v1/chapter/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validateStateTw2,
    ForbiddenUsuario,
    ForbiddenDistribuidor,
  ],
  serieCtrl.updateChapter
);

export default router;
