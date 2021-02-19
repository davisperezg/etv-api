import { Response, RequestHandler } from "express";
import Role from "../models/Role";

export const findRoles: RequestHandler = async (req, res) => {
  const { nivel }: any = req.user;
  if (nivel === 4) {
    const allRoles = await Role.find({
      name: {
        $in: ["Owner", "Distribuidor", "Administrador", "Usuario"],
      },
    })
      .select("name")
      .select("createdAt");
    return res.status(200).json(allRoles);
  }
  if (nivel === 3) {
    const allRoles = await Role.find({
      name: {
        $in: ["Distribuidor", "Usuario"],
      },
    })
      .select("name")
      .select("createdAt");
    return res.status(200).json(allRoles);
  }
  if (nivel === 2) {
    const allRoles = await Role.find({
      name: { $in: ["Distribuidor", "Usuario"] },
    })
      .select("name")
      .select("createdAt");
    return res.status(200).json(allRoles);
  }
  if (nivel === 1) {
    return res.status(401).json("Unauthorized");
  }
};
