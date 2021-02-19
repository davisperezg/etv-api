import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import User from "../models/User";
import config from "../config";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_KEY,
};

export default new Strategy(opts, async (payload, done) => {
  //Busca datos por el id que tiene el TOKEN
  const userFound: any = await User.findOne({
    _id: payload.id,
  }).populate("role", "name nivel");

  //Datos a mostrar
  const data = {
    id: userFound._id,
    username: userFound.username,
    rol: userFound.role.name,
    estado: userFound.state,
    nivel: userFound.role.nivel,
    cod: userFound.cod,
    cod_ide: userFound.cod_ide,
  };
  let expirationDate = new Date(payload.exp * 1000);
  if (expirationDate < new Date()) {
    return done(null, false);
  }
  let user = data;
  done(null, user);
  /**
   * try {
    if (userFound) {
      return done(null, data);
    }
    done(null, false);
  } catch (e) {
    console.log(e);
  }
   */
});
