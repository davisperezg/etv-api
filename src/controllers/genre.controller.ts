import { Response, RequestHandler } from "express";
import Genres from "../models/Genres";
import Country from "../models/Country";

//Listar Peliculas para usuarios
export const getGenres: RequestHandler = async (req, res) => {
  try {
    const genres = await Genres.find();
    return res.status(200).json(genres);
  } catch (error) {
    res.json(error);
  }
};

//Obtener pelicula
export const getGenre: RequestHandler = async (req, res) => {
  const genreFound = await Genres.findById(req.params.id);

  if (!genreFound) return res.status(204).json();

  return res.status(200).json(genreFound);
};
