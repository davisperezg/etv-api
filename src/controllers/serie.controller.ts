import { Response, RequestHandler } from "express";
import Chapter from "../models/Chapter";
import Country from "../models/Country";
import Genres from "../models/Genres";
import Season from "../models/Season";
import Serie from "../models/Serie";

//Registrar serie
export const createSerie: RequestHandler = async (req, res) => {
  const { title, image, description, country, year, genres } = req.body;

  const newSerie: any = new Serie({
    title,
    image,
    description,
    year,
  });

  //Validamos si existe Genero
  if (genres) {
    //busca el id de genres por nombre
    const foundGenres = await Genres.find({ name: { $in: genres } });
    //almacena el id en roles
    newSerie.genres = foundGenres.map((gen) => gen._id);
  } else {
    newSerie.genres = [];
  }

  if (country) {
    //busca el id de genres por nombre
    const foundCountry: any = await Country.findOne({ name: { $in: country } });
    //almacena el id en roles
    newSerie.country = foundCountry._id;
  } else {
    newSerie.country = null;
  }
  //Mandamos a registrar
  try {
    const savedSerie = await newSerie.save();
    res.status(200).json(savedSerie);
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

//Registrar capitulos
export const createChapter: RequestHandler = async (req, res) => {
  const { name, url, description, season, duration, web, server } = req.body;

  const buscarNameSeason = await Season.findOne({
    name: name.toUpperCase(),
    season: season,
  });
  if (buscarNameSeason)
    return res.status(400).json("Este capítulo ya está registrado");

  //buscamos si url ya existe
  const chapterFound = await Chapter.findOne({ url: url });
  //validamos
  if (chapterFound) return res.status(303).json({ message: "URL ya existe" });

  const newChapter = new Chapter({
    name,
    url,
    description,
    season,
    duration,
    web,
    server,
  });

  try {
    const chaptercreated = await newChapter.save();
    return res.status(200).json(chaptercreated);
  } catch (e) {
    return res.status(400).json(e);
  }
};

//Registra Temporada
export const createSeason: RequestHandler = async (req, res) => {
  const { name, serie } = req.body;

  const buscarNameSerie = await Season.findOne({
    name: name.toUpperCase(),
    serie: serie,
  });
  if (buscarNameSerie)
    return res.status(400).json("Esta temporada ya está registrada");

  const newSeason: any = new Season({
    name,
    serie,
  });

  try {
    const seasoncreated = await newSeason.save();
    return res.status(200).json(seasoncreated);
  } catch (e) {
    return res.json(e);
  }
};

//Lista Temporada por Serie
export const getSeasonXSerie: RequestHandler = async (req, res) => {
  const { nivel }: any = req.user;
  if (nivel === 3 || nivel === 4) {
    try {
      const season: any = await Season.find({
        serie: req.params.id,
      })
        .populate("serie")
        .select("name state");
      return res.status(200).json(season);
    } catch (error) {
      return res.json(error);
    }
  } else {
    try {
      const season: any = await Season.find({
        state: 1,
        serie: req.params.id,
      })
        .populate("serie")
        .select("name");
      return res.status(200).json(season);
    } catch (error) {
      return res.json(error);
    }
  }
};

export const getChaptersXSeason: RequestHandler = async (req, res) => {
  const { nivel }: any = req.user;
  if (nivel === 3 || nivel === 4) {
    try {
      const season: any = await Chapter.find({
        season: req.params.id,
      })
        .populate("season")
        .select("name url description duration state web server");
      return res.status(200).json(season);
    } catch (e) {
      return res.json(e);
    }
  } else {
    try {
      const season: any = await Chapter.find({
        state: 1,
        season: req.params.id,
      })
        .populate("season")
        .select("name url description duration web server");
      return res.status(200).json(season);
    } catch (e) {
      return res.json(e);
    }
  }
};

//Lista series
export const getSeries: RequestHandler = async (req, res) => {
  const { nivel }: any = req.user;
  if (nivel === 3 || nivel === 4) {
    const serieFound = await Serie.find()
      .populate("country", "name flag cod")
      .populate("genres", "name");

    if (!serieFound) return res.status(204).json();

    return res.status(200).json(serieFound);
  } else {
    const serieFound = await Serie.find({
      state: 1,
    })
      .populate("country", "name flag cod")
      .populate("genres", "name");

    if (!serieFound) return res.status(204).json();

    return res.status(200).json(serieFound);
  }
};

//Obtener Serie
export const getSerie: RequestHandler = async (req, res) => {
  const serieFound = await Serie.findById(req.params.id)
    .populate("country", "name")
    .populate("genres", "name");

  if (!serieFound) return res.status(204).json();

  return res.status(200).json(serieFound);
};

//Obtener Season
export const getSeason: RequestHandler = async (req, res) => {
  const seasonFound = await Season.findById(req.params.id);
  //.populate("serie", "name")

  if (!seasonFound) return res.status(204).json();

  return res.status(200).json(seasonFound);
};
//Obtener Chapter
export const getChapter: RequestHandler = async (req, res) => {
  const chapterFound = await Chapter.findById(req.params.id);
  //.populate("season", "name")

  if (!chapterFound) return res.status(204).json();

  return res.status(200).json(chapterFound);
};
//Actualizar Chapter
export const updateChapter: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const { state } = req.body;
  if (state) req.body.state = 1;

  const chapterUpdated = await Chapter.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!chapterUpdated) return res.status(204).json();

  return res.status(200).json(chapterUpdated);
};

//Actualizar Season
export const updateSeason: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const { state } = req.body;
  if (state) req.body.state = 1;

  const seasonUpdated = await Season.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!seasonUpdated) return res.status(204).json();

  return res.status(200).json(seasonUpdated);
};

//Actualizar Serie
export const updateSerie: RequestHandler = async (
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

  const serieUpdated = await Serie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!serieUpdated) return res.status(204).json();

  return res.status(200).json(serieUpdated);
};

//Desactivar Season
export const desactivateSeason: RequestHandler = async (req, res) => {
  const data = {
    state: 2,
  };

  const seasonFound = await Season.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });

  if (!seasonFound) return res.status(204).json();

  return res.status(200).json(seasonFound);
};

//Activar Season
export const activateSeason: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const data = {
    state: 1,
  };

  const seasonFound = await Season.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });
  if (!seasonFound) return res.status(204).json();

  return res.status(200).json(seasonFound);
};

//Desactivar Chapter
export const desactivateChapter: RequestHandler = async (req, res) => {
  const data = {
    state: 2,
  };

  const seasonFound = await Chapter.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });

  if (!seasonFound) return res.status(204).json();

  return res.status(200).json(seasonFound);
};

//Activar Chapter
export const activateChapter: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const data = {
    state: 1,
  };

  const seasonFound = await Chapter.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });
  if (!seasonFound) return res.status(204).json();

  return res.status(200).json(seasonFound);
};

//Desactivar Serie
export const desactivateSerie: RequestHandler = async (req, res) => {
  const data = {
    state: 2,
  };

  const serieFound = await Serie.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });

  if (!serieFound) return res.status(204).json();

  return res.status(200).json(serieFound);
};

//Activar Serie
export const activateSerie: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const data = {
    state: 1,
  };

  const serieFound = await Serie.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });
  if (!serieFound) return res.status(204).json();

  return res.status(200).json(serieFound);
};
