import { Response, RequestHandler } from "express";
import Video from "../models/Video";
import Genres from "../models/Genres";
import Country from "../models/Country";
import Serie from "../models/Serie";

//Registrar pelicula o canal
export const createVideo: RequestHandler = async (req, res) => {
  const {
    title,
    url,
    image,
    description,
    country,
    duration,
    year,
    genres,
    web,
    server,
    typeVideo,
  } = req.body;

  const videoFound = await Video.findOne({ url: url });
  if (videoFound) return res.status(400).json("URL Generado ya existe");

  const newMovie: any = new Video({
    title,
    url,
    image,
    description,
    duration,
    year,
    web,
    server,
    typeVideo,
  });

  //Validamos si existe Genero
  if (genres) {
    //busca el id de genres por nombre
    const foundGenres = await Genres.find({ name: { $in: genres } });
    //almacena el id en roles
    newMovie.genres = foundGenres.map((gen) => gen._id);
  } else {
    newMovie.genres = [];
  }

  if (country) {
    //busca el id de genres por nombre
    const foundCountry: any = await Country.findOne({ name: { $in: country } });
    //almacena el id en roles
    newMovie.country = foundCountry._id;
  } else {
    newMovie.country = null;
  }
  //Mandamos a registrar
  try {
    const savedMovie = await newMovie.save();
    res.status(200).json(savedMovie);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

//Listar Peliculas para usuarios
export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos: any = await Video.find({
      state: { $in: 1 },
    })
      .populate("genres", "name")
      .populate("country", "name flag cod");
    return res.status(200).json(videos);
  } catch (error) {
    return res.json(error);
  }
};

//Lista Peliculas SA y A
export const getAllVideos: RequestHandler = async (req, res) => {
  const { nivel }: any = req.user;
  if (nivel === 1 || nivel === 2) {
    return res.status(401).json("Unauthorized");
  }

  try {
    const videos = await Video.find()
      .populate("genres", "name")
      .populate("country", "name flag cod");
    return res.status(200).json(videos);
  } catch (error) {
    res.json(error);
  }
};

//Obtener pelicula - Observación
export const getVideo: RequestHandler = async (req, res) => {
  const movieFound = await Video.findById(req.params.id)
    .populate("country", "name")
    .populate("genres", "name");

  if (!movieFound) return res.status(204).json();

  return res.status(200).json(movieFound);
};

//Activar Pelicula
export const activateVideo: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const data = {
    state: 1,
  };

  const movieUpdated = await Video.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });
  if (!movieUpdated) return res.status(204).json();

  return res.status(200).json(movieUpdated);
};

//Desactivar Pelicula
export const desactivateVideo: RequestHandler = async (req, res) => {
  const { nivel }: any = req.user;
  if (nivel === 1 || nivel === 2) {
    return res.status(401).json("Unauthorized");
  }

  const data = {
    state: 2,
  };

  const movieFound = await Video.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });

  if (!movieFound) return res.status(204).json();

  return res.status(200).json(movieFound);
};

//Actualizar Pelicula
export const updateVideo: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const { country, genres, state } = req.body;
  if (state) req.body.state = 1;
  if (country) {
    //busca el id de country por nombre
    const foundCountry: any = await Country.findOne({
      name: { $in: country },
    });
    //almacena el id en country
    req.body.country = foundCountry._id;
  }

  if (genres) {
    //busca el id de genres por nombre
    const foundGenres = await Genres.find({ name: { $in: genres } });
    //almacena el id en genres
    req.body.genres = foundGenres.map((gen) => gen._id);
  }
  const movieUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!movieUpdated) return res.status(204).json();

  return res.status(200).json(movieUpdated);
};
