import User from "../models/User";
import { Response, RequestHandler } from "express";
import PasswordUtils from "../utils/PasswordBcrypt";
import config from "../config";
import jwt from "jsonwebtoken";
import Role from "../models/Role";
import Plans from "../models/Plans";
import { uid, suid } from "rand-token";
import moment from "moment";
import "moment/locale/es"; // without this line it didn't work
import "moment-duration-format";
moment.locale("es");

var refreshTokens: any = {};

//Obtener los datos que tiene el TOKEN
export const findUser: RequestHandler = async (req, res) => {
  res.status(200).json(req.user);
};

//lista usuarios
export const findUsers: RequestHandler = async (req, res) => {
  const { nivel, cod, id }: any = req.user;
  //const searchRecorder: any = await User.findOne({ _id: id });
  //console.log(searchRecorder);
  if (nivel === 4) {
    //OWNER
    const allUser = await User.find()
      .select("username")
      .select("state")
      .select("createdAt")
      .select("celular")
      .select("iniciaPlan")
      .select("terminaPlan")
      .select("updatedAt")
      .select("contAccess")
      .select("cantOrtorgada")
      .select("cantSobrante")
      .populate("role", "name")
      .populate("timeExpiration", "name time")
      .populate("ide", "username");
    return res.status(200).json(allUser);
  }
  if (nivel === 3) {
    //ADMINISTRADOR
    const foudRoles = await Role.find({
      name: { $in: ["Distribuidor", "Usuario"] },
    });
    //busca roles administradior o usuario
    const arrayRoles: any = foudRoles.map((rol) => rol._id);
    const allUser = await User.find({
      role: { $in: arrayRoles },
    })
      .select("username")
      .select("state")
      .select("createdAt")
      .select("celular")
      .select("iniciaPlan")
      .select("terminaPlan")
      .select("updatedAt")
      .select("contAccess")
      .select("cantOrtorgada")
      .select("cantSobrante")
      .populate("role", "name")
      .populate("timeExpiration", "name time")
      .populate("ide", "username")
      .where("ide")
      .equals(id);
    return res.status(200).json(allUser);
  }
  if (nivel === 2) {
    //DISTRIBUIDORES
    const foudRoles = await Role.find({
      name: { $in: ["Distribuidor", "Usuario"] },
    });
    //busca roles administradior o usuario
    const arrayRoles: any = foudRoles.map((rol) => rol._id);
    const allUser = await User.find({
      role: arrayRoles,
    })
      .select("username")
      .select("state")
      .select("createdAt")
      .select("celular")
      .select("iniciaPlan")
      .select("terminaPlan")
      .select("updatedAt")
      .select("contAccess")
      .select("cantOrtorgada")
      .select("cantSobrante")
      .populate("role", "name")
      .populate("timeExpiration", "name time")
      .where("ide")
      .equals(id);
    return res.status(200).json(allUser);
  }
  if (nivel === 1) {
    //USUARIOS
    return res.status(401).json("Unauthorized");
  }
};

//Registrar usuarios
export const signUp: RequestHandler = async (req, res) => {
  const { nivel, cod, id, cod_ide }: any = req.user;

  const searchRecorder: any = await User.findOne({ _id: id });
  if (nivel === 4) {
    //NIVEL OWNER
    const { username, password, role, timeExpiration, celular } = req.body;

    const foundUser = await User.findOne({ username: { $in: username } });
    if (foundUser) return res.status(400).json("Usuario ya existe");

    const foundCelular = await User.findOne({ celular: { $in: celular } });
    if (foundCelular) return res.status(400).json("Celular ya existe");

    const hashedPassword: string = await PasswordUtils.encryptPassword(
      password
    );

    //Buscar rol
    const foundRoles: any = await Role.findOne({ name: { $in: role } });
    //No encuentra, mandamos mensaje
    if (!foundRoles) return res.status(400).json("Rol no encontrado");
    //Buscar plan
    const foundPlan: any = await Plans.findOne({
      name: { $in: timeExpiration },
    });
    //No encuentra, mandamos mensaje
    if (!foundPlan) return res.status(400).json("Plan no encontrado");

    const foundUserRole: any = await User.findOne({
      role: foundRoles._id, //si busco distribuidor, obtener ultimo cod del distribuidor
    })
      .sort({ $natural: -1 })
      .limit(1);

    //if (!foundUserRole) return res.status(400).json("Rol no encontrado");

    //busco administrador
    const foundRoleAdmin: any = await Role.findOne({
      name: { $in: "Administrador" },
    });

    const foundUserAdminAux: any = await User.findOne({
      role: foundRoleAdmin._id,
    })
      .sort({ $natural: -1 })
      .limit(1);
    //termina de consultar aux admin
    if (foundRoles.name === "Distribuidor") {
      return res
        .status(401)
        .json("Solo los administradores pueden registrar distribuidores");
    }
    if (foundRoles.name === "Administrador") {
      let ultimoIDE = foundUserRole
        ? foundUserRole.cod_ide
        : foundUserAdminAux
        ? foundUserAdminAux.cod_ide
        : 1;
      let ultimoCod = foundUserRole
        ? foundUserRole.cod
        : foundUserAdminAux
        ? foundUserAdminAux.cod
        : 1;

      const newUser: any = new User({
        username,
        password: hashedPassword,
        state: 1,
        role: foundRoles._id,
        timeExpiration: foundPlan._id,
        cod: ultimoCod + 1,
        ide: id,
        celular,
        cod_ide: ultimoIDE + 1,
        iniciaPlan: moment(),
        terminaPlan: moment().add(foundPlan.time, "days"),
      });
      try {
        await newUser.save();
        return res.status(200).json({ message: "Usuario creado" });
      } catch (e) {
        console.log(e);
        return res.status(400).json(e);
      }
    } else {
      const newUser: any = new User({
        username,
        password: hashedPassword,
        state: 1,
        role: foundRoles._id,
        timeExpiration: foundPlan._id,
        cod: cod,
        ide: id,
        celular,
        cod_ide: cod_ide,
        iniciaPlan: moment(),
        terminaPlan: moment().add(foundPlan.time, "days"),
      });
      try {
        await newUser.save();
        return res.status(200).json({ message: "Usuario creado" });
      } catch (e) {
        console.log(e);
        return res.status(400).json(e);
      }
    }
  }
  if (nivel === 3) {
    //NIVEL ADMINISTRADOR
    const {
      username,
      password,
      role,
      timeExpiration,
      cantOrtorgada,
      celular,
    } = req.body;
    const foundRoles: any = await Role.findOne({ name: { $in: role } });
    if (foundRoles.name === "Owner")
      return res.status(401).json("Unauthorized");

    const foundUser = await User.findOne({ username: { $in: username } });
    if (foundUser) return res.status(400).json("Usuario ya existe");
    const foundCelular = await User.findOne({ celular: { $in: celular } });
    if (foundCelular) return res.status(400).json("Celular ya existe");
    const hashedPassword: string = await PasswordUtils.encryptPassword(
      password
    );
    const foundPlan: any = await Plans.findOne({
      name: { $in: timeExpiration },
    });
    const foundUserRole: any = await User.findOne({
      role: foundRoles._id,
    })
      .sort({ $natural: -1 })
      .limit(1);
    //busco administrador
    const foundRoleAdmin: any = await Role.findOne({
      name: { $in: "Administrador" },
    });
    const foundUserAdminAux: any = await User.findOne({
      role: foundRoleAdmin._id,
    })
      .sort({ $natural: -1 })
      .limit(1);
    //termina de consultar aux admin
    if (foundRoles.name === "Distribuidor") {
      let ultimoCod = foundUserRole
        ? foundUserRole.cod
        : foundUserAdminAux
        ? foundUserAdminAux.cod
        : 1;
      //console.log(ultimoCod);
      const newUser: any = new User({
        username,
        password: hashedPassword,
        state: 1,
        role: foundRoles._id,
        timeExpiration: foundPlan._id,
        cod: ultimoCod + 1,
        ide: id,
        celular,
        cod_ide: cod_ide,
        cantOrtorgada,
        cantSobrante: cantOrtorgada,
        iniciaPlan: moment(),
        terminaPlan: moment().add(foundPlan.time, "days"),
      });
      try {
        await newUser.save();
        return res.status(200).json({ message: "Usuario creado" });
      } catch (e) {
        return res.status(400).json(e);
      }
    } else {
      const newUser: any = new User({
        username,
        password: hashedPassword,
        state: 1,
        role: foundRoles._id,
        timeExpiration: foundPlan._id,
        cod: cod,
        celular,
        cod_ide: cod_ide,
        ide: id,
        iniciaPlan: moment(),
        terminaPlan: moment().add(foundPlan.time, "days"),
      });
      try {
        await newUser.save();
        return res.status(200).json({ message: "Usuario creado" });
      } catch (e) {
        return res.status(400).json(e);
      }
    }
  }
  if (nivel === 2) {
    //NIVEL DISTRIBUIDOR
    const { username, password, role, timeExpiration, celular } = req.body;
    const foundRoles: any = await Role.findOne({ name: { $in: role } });
    if (foundRoles.name === "Owner" || foundRoles.name === "Administrador")
      return res.status(401).json("Unauthorized");
    const foundUser = await User.findOne({ username: { $in: username } });
    if (foundUser) return res.status(400).json("Usuario ya existe");
    const foundCelular = await User.findOne({ celular: { $in: celular } });
    if (foundCelular) return res.status(400).json("Celular ya existe");
    const hashedPassword: string = await PasswordUtils.encryptPassword(
      password
    );
    const foundPlan: any = await Plans.findOne({
      name: { $in: timeExpiration },
    });
    const foundUserRole: any = await User.findOne({
      role: foundRoles._id,
    })
      .sort({ $natural: -1 })
      .limit(1);
    if (foundRoles.name === "Distribuidor") {
      let ultimoCod = foundUserRole.cod;
      const newUser: any = new User({
        username,
        password: hashedPassword,
        state: 1,
        role: foundRoles._id,
        timeExpiration: foundPlan._id,
        cod: ultimoCod + 1,
        ide: id,
        celular,
        cod_ide: cod_ide,
        cantOrtorgada: 0,
        cantSobrante: 0,
        iniciaPlan: moment(),
        terminaPlan: moment().add(foundPlan.time, "days"),
      });

      if (searchRecorder.cantSobrante <= 0) {
        return res.status(400).json("No tiene usuarios disponibles");
      }
      const updateCantRegister = {
        cantSobrante: searchRecorder.cantSobrante - 1,
      };
      try {
        await User.findByIdAndUpdate(searchRecorder._id, updateCantRegister, {
          new: true,
        });
      } catch (e) {
        return res.status(400).json("Error al actualizar cantidad de registro");
      }

      try {
        await newUser.save();
        return res.status(200).json({ message: "Usuario creado" });
      } catch (e) {
        return res.status(400).json(e);
      }
    } else {
      const newUser: any = new User({
        username,
        password: hashedPassword,
        state: 1,
        role: foundRoles._id,
        timeExpiration: foundPlan._id,
        cod: cod,
        celular,
        cod_ide: cod_ide,
        ide: id,
        iniciaPlan: moment(),
        terminaPlan: moment().add(foundPlan.time, "days"),
      });

      if (searchRecorder.cantSobrante <= 0) {
        return res.status(400).json("No tiene usuarios disponibles");
      }
      const updateCantRegister = {
        cantSobrante: searchRecorder.cantSobrante - 1,
      };
      try {
        await User.findByIdAndUpdate(searchRecorder._id, updateCantRegister, {
          new: true,
        });
      } catch (e) {
        return res.status(400).json("Error al actualizar cantidad de registro");
      }
      try {
        await newUser.save();
        return res.status(200).json({ message: "Usuario creado" });
      } catch (e) {
        return res.status(400).json(e);
      }
    }
  }
  if (nivel === 1) {
    return res.status(401).json("Unauthorized");
  }
};

//Login
export const signIn: RequestHandler = async (req, res) => {
  //parametros ingresados
  const { username, password } = req.body;

  //userFound -> busca al usuario por username obtiene solo 1 y puebla los roles
  const userFound: any = await User.findOne({ username: username })
    .populate("role", "name")
    .populate("timeExpiration", "time");

  //si no existe username
  if (!userFound)
    return res
      .status(400)
      .json({ message: "Usuario y/o contraseña son incorrectos" });

  //matchPassword -> devuelve verdadero o falso al comparar las contrasenias
  const matchPassword = await PasswordUtils.comparePaswword(
    password,
    userFound.password
  );

  //si es false o no existe
  if (!matchPassword)
    //muestra mensaje
    return res
      .status(400)
      .json({ message: "Usuario y/o contraseña son incorrectos" });

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
      return res.status(400).json({ message: "Tu suscripción ha culminado." });
    }
  }
  //Si el usuario tiene estado 2, no tendra acceso al sistema
  if (userFound.state === 2)
    return res.status(400).json({ message: "Acceso denegado" });

  const buscarOwnerAdmi: any = await Role.findOne({
    name: { $in: userFound.role.name },
  });
  if (
    buscarOwnerAdmi.nivel === 1 ||
    buscarOwnerAdmi.nivel === 2 ||
    buscarOwnerAdmi.nivel === 3
  ) {
    if (userFound.contAccess >= 3)
      return res
        .status(400)
        .json({ message: "Ya se encuentran 3 dispositivos conectados" });

    const updateCont = {
      contAccess: userFound.contAccess + 1,
    };

    await User.findByIdAndUpdate(userFound._id, updateCont, {
      new: true,
    });
  }
  //console.log(userFound.createdAt);
  //console.log(userFound.timeExpiration.time);
  //si todo es exito ejecuta la creación de token
  const refreshToken = uid(256);
  const token = jwt.sign({ id: userFound._id }, config.SECRET_KEY, {
    expiresIn: config.EXPIRE_KEY,
  });
  refreshTokens[refreshToken] = username;
  return res.status(200).json({ token, refreshToken });
};

export const token: RequestHandler = async (req, res) => {
  let username = req.body.username;
  let refreshToken = req.body.refreshToken;
  if (
    refreshToken in refreshTokens &&
    refreshTokens[refreshToken] == username
  ) {
    const userFound: any = await User.findOne({
      username: username,
    });
    let token = jwt.sign({ id: userFound._id }, config.SECRET_KEY, {
      expiresIn: config.EXPIRE_KEY,
    });
    res.status(200).json({ token });
  } else {
    res.send(401);
  }
};

export const disconnectDevice: RequestHandler = async (req, res) => {
  const { id }: any = req.user;

  const userFound: any = await User.findOne({ _id: id })
    .populate("role", "name")
    .populate("timeExpiration", "time");

  if (userFound.contAccess === 0) return res.status(200).json();
  const updateCont = {
    contAccess: userFound.contAccess - 1,
  };

  try {
    await User.findByIdAndUpdate(id, updateCont, {
      new: true,
    });
    return res.status(200).json();
  } catch (e) {
    return res.status(400).json(e);
  }
};

//Desactivar Usuario
export const desactivateUser: RequestHandler = async (req, res) => {
  const { id, nivel }: any = req.user;
  if (nivel === 2) {
    const buscarDesactivador: any = await User.findOne({ _id: id });
    //if (buscarDesactivador.cantSobrante <= 0) {
    //  return res.status(400).json("No tiene usuarios disponibles");
    //}
    const dataDesactivador = {
      cantSobrante: buscarDesactivador.cantSobrante + 1,
    };
    await User.findByIdAndUpdate(id, dataDesactivador, {
      new: true,
    });
  }

  //buscando al usuario a quien desactivar, no al desactivador
  const user: any = await User.findOne({ _id: req.params.id }).populate(
    "role",
    "name"
  );
  /** POR REVISAR 
    * const { id }: any = req.user;
   * if (user.role.name === "Administrador") {
    try {
      await User.update(
        { cod_ide: user.cod_ide },
        { $set: { state: 2 } },
        { multi: true }
      );
      return res.status(200).json({ message: "Administrador deshabilitado" });
    } catch (e) {
      return res
        .status(200)
        .json({ message: "No se pudo deshabilitar al administrador" });
    }
  }
  if (user.role.name === "Distribuidor") {
    try {
      await User.update(
        { cod: user.cod },
        { $set: { state: 2 } },
        { multi: true }
      );
      const buscarDesactivador: any = await User.findOne({ _id: id });
      const dataDesactivador = {
        cantSobrante: buscarDesactivador.cantSobrante + 1,
      };

      await User.findByIdAndUpdate(id, dataDesactivador, {
        new: true,
      });
      return res.status(200).json({ message: "Distribuidor deshabilitado" });
    } catch (e) {
      return res
        .status(200)
        .json({ message: "No se pudo deshabilitar al distribuidor" });
    }
  }
   */

  const data = {
    state: 2,
    contAccess: 0,
  };
  const userFound = await User.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });

  /**
  *  const buscarDesactivador: any = await User.findOne({ _id: id });
  const dataDesactivador = {
    cantSobrante: buscarDesactivador.cantSobrante + 1,
  };

  await User.findByIdAndUpdate(id, dataDesactivador, {
    new: true,
  });
  */
  if (!userFound) return res.status(204).json();
  return res.status(200).json({ message: "Usuario deshabilitado" });
};

//Descontar Usuario
export const descontarAcceso: RequestHandler = async (req, res) => {
  const { id, nivel }: any = req.user;

  if (nivel === 4) {
    return res.status(200).json();
  }

  const userFound: any = await User.findOne({ _id: id })
    .populate("role", "name")
    .populate("timeExpiration", "time");

  if (userFound.contAccess === 0) return res.status(200).json();
  const updateCont = {
    contAccess: userFound.contAccess - 1,
  };

  try {
    await User.findByIdAndUpdate(id, updateCont, {
      new: true,
    });
    return res.status(200).json();
  } catch (e) {
    return res.status(400).json(e);
  }
};

//Contar Usuario
export const contarAcceso: RequestHandler = async (req, res) => {
  const { id, nivel }: any = req.user;

  if (nivel === 4) {
    return res.status(200).json();
  }

  const userFound: any = await User.findOne({ _id: id })
    .populate("role", "name")
    .populate("timeExpiration", "time");

  //if (userFound.contAccess === 0) return res.status(200).json();

  const updateCont = {
    contAccess: userFound.contAccess + 1,
  };

  try {
    const data = await User.findByIdAndUpdate(id, updateCont, {
      new: true,
    });

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json(e);
  }
};

//Activar Usuario
export const activateUser: RequestHandler = async (req, res) => {
  const { id, nivel }: any = req.user;

  if (nivel === 2) {
    const buscarDesactivador: any = await User.findOne({ _id: id });
    if (buscarDesactivador.cantSobrante <= 0) {
      return res.status(400).json("No tiene usuarios disponibles");
    }
    const dataDesactivador = {
      cantSobrante: buscarDesactivador.cantSobrante - 1,
    };
    await User.findByIdAndUpdate(id, dataDesactivador, {
      new: true,
    });
  }

  /** POR REVISAR
   * const user: any = await User.findOne({ _id: req.params.id }).populate(
    "role",
    "name"
  );
  if (user.role.name === "Administrador") {
    try {
      await User.update(
        { cod_ide: user.cod_ide },
        { $set: { state: 1 } },
        { multi: true }
      );
      return res.status(200).json({ message: "Administrador deshabilitado" });
    } catch (e) {
      return res
        .status(200)
        .json({ message: "No se pudo deshabilitar al administrador" });
    }
  }
  if (user.role.name === "Distribuidor") {
    try {
      await User.update(
        { cod: user.cod },
        { $set: { state: 1 } },
        { multi: true }
      );

      return res.status(200).json({ message: "Distribuidor activado" });
    } catch (e) {
      return res
        .status(200)
        .json({ message: "No se pudo activar al distribuidor" });
    }
  }
   */

  const data = {
    state: 1,
  };

  const userFound = await User.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });
  if (!userFound) return res.status(204).json();

  return res.status(200).json({ message: "Usuario activado" });
};

//Obtener Usuario por ID
export const getUser: RequestHandler = async (req, res) => {
  const userFound = await User.findById(req.params.id)
    .select("username")
    .select("celular")
    .select("cantOrtorgada")
    .select("cantSobrante")
    .select("terminaPlan")
    .populate("role", "name")
    .populate("timeExpiration", "name");

  if (!userFound) return res.status(204).json();
  return res.status(200).json(userFound);
};

//Actualizar Usuario
export const updateUser: RequestHandler = async (req, res) => {
  //obtener usuario del token
  const { nivel }: any = req.user;
  //buscar al usuario por params id
  const userFound: any = await User.findById(req.params.id).populate(
    "timeExpiration",
    "time"
  );
  const { password, role, timeExpiration } = req.body;
  if (password) {
    //encriptamos la contrasenia almacenando en una variable y
    //pasamos como parametro el password del body
    const hashedPassword: string = await PasswordUtils.encryptPassword(
      password
    );
    //el password escrito en el body sera enviado a la bd encriptado
    req.body.password = hashedPassword;
  } else {
    req.body.password = userFound.password;
  }

  if (role) {
    //busca el id de genres por nombre
    const foundRoles: any = await Role.findOne({ name: { $in: role } });
    //almacena el id en roles
    req.body.role = foundRoles._id;
  }

  if (timeExpiration) {
    //busca el id de genres por nombre
    const foundPlan: any = await Plans.findOne({
      name: { $in: timeExpiration },
    });
    //almacena el id en roles
    req.body.timeExpiration = foundPlan._id;
  }
  const foundPlanToUpdate: any = await Plans.findOne({
    name: { $in: timeExpiration },
  });
  //si es el mismo plan corre desde hoy, si es otro plan correo desde que se creo
  //modificando plan

  let ini = moment().format("YYYY-MM-DD HH:mm:ss");
  let fin = moment(userFound.terminaPlan).format("YYYY-MM-DD HH:mm:ss");
  //console.log(ini);
  //console.log(fin);

  if (moment(ini).isSameOrAfter(fin)) {
    req.body.iniciaPlan = moment();
    req.body.terminaPlan = moment().add(foundPlanToUpdate.time, "days");
  } else {
    req.body.timeExpiration = userFound.timeExpiration;
  }
  //username
  req.body.username = userFound.username;

  //ADMINISTRADOR O OWNER PUEDE OTORGAR CANTIDAD DE USUARIOS
  if (nivel === 3 || nivel === 4) {
    const { cantOrtorgada } = req.body;
    if (cantOrtorgada) {
      let sobrante = userFound.cantSobrante || 0;
      req.body.cantOrtorgada = cantOrtorgada;
      req.body.cantSobrante = sobrante + Number(cantOrtorgada);
    } else {
      if (
        cantOrtorgada <= 0 ||
        cantOrtorgada === undefined ||
        cantOrtorgada === null
      ) {
        req.body.cantOrtorgada = userFound.cantOrtorgada;
        req.body.cantSobrante = userFound.cantOrtorgada;
      }
    }

    const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    //si no existe el params.id no mostramos nada
    if (!userUpdate) return res.status(204).json();

    //si existe mostramos los datos actualizados
    return res.status(200).json(userUpdate);
  }
  //DISTRIBUIDOR NO PUEDE ALTERAR LA CANTIDAD
  if (nivel === 2) {
    req.body.cantOrtorgada = userFound.cantOrtorgada;
    req.body.cantSobrante = userFound.cantSobrante;
    //Mandamos a actualizar
    const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    //si no existe el params.id no mostramos nada
    if (!userUpdate) return res.status(204).json();

    //si existe mostramos los datos actualizados
    return res.status(200).json(userUpdate);
  }
  if (nivel === 1) {
    return res.status(401).json("Unauthorized");
  }
};
