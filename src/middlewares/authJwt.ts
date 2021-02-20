import { Response, RequestHandler } from "express";
import Role from "../models/Role";
import User from "../models/User";
import PasswordUtils from "../utils/PasswordBcrypt";
import moment from "moment";
import "moment/locale/es"; // without this line it didn't work
import "moment-duration-format";
moment.locale("es");

export const validateStateTw2: RequestHandler = async (req, res, next) => {
  const { id, estado }: any = req.user;

  const userFound: any = await User.findOne({ _id: id })
    .populate("role", "name")
    .populate("timeExpiration", "time");

  if (estado === 2) {
    return res.status(401).json("Permiso denegado");
  }

  if (userFound.terminaPlan) {
    let fin = moment(userFound.terminaPlan).format("YYYY-MM-DD HH:mm:ss");
    let hoy = moment().format("YYYY-MM-DD HH:mm:ss");
    if (moment(hoy).isSameOrAfter(fin)) {
      const updateState = {
        state: 2,
        contAccess: 0,
      };
      await User.findByIdAndUpdate(userFound._id, updateState, {
        new: true,
      });
      return res.status(400).json("Tu suscripción ha culminado.");
    } else next();
  } else next();
};

export const ForbiddenUsuario: RequestHandler = async (req, res, next) => {
  const { user }: any = req;
  const { role }: any = user;
  if (role === "Usuario")
    return res.status(403).json({ message: "No autorizado" });
  else next();
};

export const ForbiddenAdministrador: RequestHandler = async (
  req,
  res,
  next
) => {
  const { user }: any = req;
  const { role }: any = user;
  if (role === "Administrador")
    return res.status(403).json({ message: "No autorizado" });
  else next();
};

export const ForbiddenDistribuidor: RequestHandler = async (req, res, next) => {
  const { user }: any = req;
  const { role }: any = user;
  if (role === "Distribuidor")
    return res.status(403).json({ message: "No autorizado" });
  else next();
};

export const MyAccessURL: RequestHandler = async (req, res, next) => {
  if (req.body.token === "token") {
    const { username, password, role, celular } = req.body;

    const hashedPassword: string = await PasswordUtils.encryptPassword(
      password
    );

    const newUser: any = new User({
      username,
      password: hashedPassword,
      celular,
      state: 1,
      cod: 1,
      cod_ide: 1,
    });

    if (role) {
      const foundRoles = await Role.find({ name: { $in: role } });
      newUser.role = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "Owner" });
      newUser.role = role!._id;
    }

    try {
      await newUser.save();
      return res.status(200).json("Owner SAVED");
    } catch (e) {
      return res.status(400).json(e);
    }
  } else {
    next();
  }
};
