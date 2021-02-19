import { Response, RequestHandler } from "express";

import Country from "../models/Country";

//Listar Paises para usuarios
export const getCountrys: RequestHandler = async (req, res) => {
  try {
    const genres = await Country.find();
    return res.status(200).json(genres);
  } catch (error) {
    res.json(error);
  }
};

//Obtener Pais
export const getCountry: RequestHandler = async (req, res) => {
  const genreFound = await Country.findById(req.params.id);

  if (!genreFound) return res.status(204).json();

  return res.status(200).json(genreFound);
};
