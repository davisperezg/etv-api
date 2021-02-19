import Country from "../models/Country";
import Genres from "../models/Genres";
import Plans from "../models/Plans";
import Roles from "../models/Role";

export const createRoles = async () => {
  try {
    const count = await Roles.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new Roles({ name: "Owner", nivel: 4 }).save(),
      new Roles({ name: "Administrador", nivel: 3 }).save(),
      new Roles({ name: "Distribuidor", nivel: 2 }).save(),
      new Roles({ name: "Usuario", nivel: 1 }).save(),
    ]);
    console.log(values);
  } catch (e) {
    console.log(e);
  }
};

export const createPlans = async () => {
  try {
    const count = await Plans.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new Plans({ name: "PLAN MENSUAL", time: 30 }).save(),
      new Plans({ name: "PLAN SEMANAL", time: 7 }).save(),
      new Plans({ name: "PLAN ANUAL", time: 365 }).save(),
      new Plans({ name: "FREE", time: 1 }).save(),
    ]);
    console.log(values);
  } catch (e) {
    console.log(e);
  }
};

export const createGenre = async () => {
  try {
    const count = await Genres.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new Genres({ name: "Acción" }).save(),
      new Genres({ name: "Comedia" }).save(),
      new Genres({ name: "Aventura" }).save(),
    ]);
    console.log(values);
  } catch (e) {
    console.log(e);
  }
};

export const createCountry = async () => {
  try {
    const count = await Country.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new Country({
        cod: "ad",
        name: "Andorra",
        flag: "http://localhost:3000/country/img/ad.svg",
      }).save(),
      new Country({
        cod: "ae",
        name: "Emiratos Árabes Unidos",
        flag: "http://localhost:3000/country/img/ae.svg",
      }).save(),
      new Country({
        cod: "af",
        name: "Afganistán",
        flag: "http://localhost:3000/country/img/af.svg",
      }).save(),
      new Country({
        cod: "ag",
        name: "Antigua y Barbuda",
        flag: "http://localhost:3000/country/img/ag.svg",
      }).save(),
      new Country({
        cod: "ai",
        name: "Anguila",
        flag: "http://localhost:3000/country/img/ai.svg",
      }).save(),
      new Country({
        cod: "al",
        name: "Albania",
        flag: "http://localhost:3000/country/img/al.svg",
      }).save(),
      new Country({
        cod: "am",
        name: "Armenia",
        flag: "http://localhost:3000/country/img/am.svg",
      }).save(),
      new Country({
        cod: "ao",
        name: "Angola",
        flag: "http://localhost:3000/country/img/ao.svg",
      }).save(),
      new Country({
        cod: "aq",
        name: "Antártida",
        flag: "http://localhost:3000/country/img/aq.svg",
      }).save(),
      new Country({
        cod: "ar",
        name: "Argentina",
        flag: "http://localhost:3000/country/img/ar.svg",
      }).save(),
      new Country({
        cod: "as",
        name: "Samoa Americana",
        flag: "http://localhost:3000/country/img/as.svg",
      }).save(),
      new Country({
        cod: "at",
        name: "Austria",
        flag: "http://localhost:3000/country/img/at.svg",
      }).save(),
      new Country({
        cod: "au",
        name: "Australia",
        flag: "http://localhost:3000/country/img/au.svg",
      }).save(),
      new Country({
        cod: "aw",
        name: "Aruba",
        flag: "http://localhost:3000/country/img/aw.svg",
      }).save(),
      new Country({
        cod: "ax",
        name: "Åland",
        flag: "http://localhost:3000/country/img/ax.svg",
      }).save(),
      new Country({
        cod: "az",
        name: "Azerbaiyán",
        flag: "http://localhost:3000/country/img/az.svg",
      }).save(),
      new Country({
        cod: "ba",
        name: "Bosnia y Herzegovina",
        flag: "http://localhost:3000/country/img/ba.svg",
      }).save(),
      new Country({
        cod: "bb",
        name: "Barbados",
        flag: "http://localhost:3000/country/img/bb.svg",
      }).save(),
      new Country({
        cod: "bd",
        name: "Bangladesh",
        flag: "http://localhost:3000/country/img/bd.svg",
      }).save(),
      new Country({
        cod: "be",
        name: "Bélgica",
        flag: "http://localhost:3000/country/img/be.svg",
      }).save(),
      new Country({
        cod: "bf",
        name: "Burkina Faso",
        flag: "http://localhost:3000/country/img/bf.svg",
      }).save(),
      new Country({
        cod: "bg",
        name: "Bulgaria",
        flag: "http://localhost:3000/country/img/bg.svg",
      }).save(),
      new Country({
        cod: "bh",
        name: "Baréin",
        flag: "http://localhost:3000/country/img/bh.svg",
      }).save(),
      new Country({
        cod: "bi",
        name: "Burundi",
        flag: "http://localhost:3000/country/img/bi.svg",
      }).save(),
      new Country({
        cod: "bj",
        name: "Benín",
        flag: "http://localhost:3000/country/img/bj.svg",
      }).save(),
      new Country({
        cod: "bl",
        name: "San Bartolomé",
        flag: "http://localhost:3000/country/img/bl.svg",
      }).save(),
      new Country({
        cod: "bm",
        name: "Bermudas",
        flag: "http://localhost:3000/country/img/bm.svg",
      }).save(),
      new Country({
        cod: "bn",
        name: "Brunéi",
        flag: "http://localhost:3000/country/img/bn.svg",
      }).save(),
      new Country({
        cod: "bo",
        name: "Bolivia",
        flag: "http://localhost:3000/country/img/bo.svg",
      }).save(),
      new Country({
        cod: "bq",
        name: "Caribe Neerlandés",
        flag: "http://localhost:3000/country/img/bq.svg",
      }).save(),
      new Country({
        cod: "br",
        name: "Brasil",
        flag: "http://localhost:3000/country/img/br.svg",
      }).save(),
      new Country({
        cod: "bs",
        name: "Bahamas",
        flag: "http://localhost:3000/country/img/bs.svg",
      }).save(),
      new Country({
        cod: "bt",
        name: "Bután",
        flag: "http://localhost:3000/country/img/bt.svg",
      }).save(),
      new Country({
        cod: "bv",
        name: "Isla Bouvet",
        flag: "http://localhost:3000/country/img/bv.svg",
      }).save(),
      new Country({
        cod: "bw",
        name: "Botsuana",
        flag: "http://localhost:3000/country/img/bw.svg",
      }).save(),
      new Country({
        cod: "by",
        name: "Bielorrusia",
        flag: "http://localhost:3000/country/img/by.svg",
      }).save(),
      new Country({
        cod: "bz",
        name: "Belice",
        flag: "http://localhost:3000/country/img/bz.svg",
      }).save(),
      new Country({
        cod: "ca",
        name: "Canadá",
        flag: "http://localhost:3000/country/img/ca.svg",
      }).save(),
      new Country({
        cod: "cc",
        name: "Islas Cocos",
        flag: "http://localhost:3000/country/img/cc.svg",
      }).save(),
      new Country({
        cod: "cd",
        name: "Congo (Rep. Dem.)",
        flag: "http://localhost:3000/country/img/cd.svg",
      }).save(),
      new Country({
        cod: "cf",
        name: "República Centroafricana",
        flag: "http://localhost:3000/country/img/cf.svg",
      }).save(),
      new Country({
        cod: "cg",
        name: "Congo",
        flag: "http://localhost:3000/country/img/cg.svg",
      }).save(),
      new Country({
        cod: "ch",
        name: "Suiza",
        flag: "http://localhost:3000/country/img/ch.svg",
      }).save(),
      new Country({
        cod: "ci",
        name: "Costa de Marfil",
        flag: "http://localhost:3000/country/img/ci.svg",
      }).save(),
      new Country({
        cod: "ck",
        name: "Islas Cook",
        flag: "http://localhost:3000/country/img/ck.svg",
      }).save(),
      new Country({
        cod: "cl",
        name: "Chile",
        flag: "http://localhost:3000/country/img/cl.svg",
      }).save(),
      new Country({
        cod: "cm",
        name: "Camerún",
        flag: "http://localhost:3000/country/img/cm.svg",
      }).save(),
      new Country({
        cod: "cn",
        name: "China",
        flag: "http://localhost:3000/country/img/cn.svg",
      }).save(),
      new Country({
        cod: "co",
        name: "Colombia",
        flag: "http://localhost:3000/country/img/co.svg",
      }).save(),
      new Country({
        cod: "cr",
        name: "Costa Rica",
        flag: "http://localhost:3000/country/img/cr.svg",
      }).save(),
      new Country({
        cod: "cu",
        name: "Cuba",
        flag: "http://localhost:3000/country/img/cu.svg",
      }).save(),
      new Country({
        cod: "cv",
        name: "Cabo Verde",
        flag: "http://localhost:3000/country/img/cv.svg",
      }).save(),
      new Country({
        cod: "cw",
        name: "Curazao",
        flag: "http://localhost:3000/country/img/cw.svg",
      }).save(),
      new Country({
        cod: "cx",
        name: "Isla de Navidad",
        flag: "http://localhost:3000/country/img/cx.svg",
      }).save(),
      new Country({
        cod: "cy",
        name: "Chipre",
        flag: "http://localhost:3000/country/img/cy.svg",
      }).save(),
      new Country({
        cod: "cz",
        name: "República Checa",
        flag: "http://localhost:3000/country/img/cz.svg",
      }).save(),
      new Country({
        cod: "de",
        name: "Alemania",
        flag: "http://localhost:3000/country/img/de.svg",
      }).save(),
      new Country({
        cod: "dj",
        name: "Yibuti",
        flag: "http://localhost:3000/country/img/dj.svg",
      }).save(),
      new Country({
        cod: "dk",
        name: "Dinamarca",
        flag: "http://localhost:3000/country/img/dk.svg",
      }).save(),
      new Country({
        cod: "dm",
        name: "Dominica",
        flag: "http://localhost:3000/country/img/dm.svg",
      }).save(),
      new Country({
        cod: "do",
        name: "República Dominicana",
        flag: "http://localhost:3000/country/img/do.svg",
      }).save(),
      new Country({
        cod: "dz",
        name: "Argelia",
        flag: "http://localhost:3000/country/img/dz.svg",
      }).save(),
      new Country({
        cod: "ec",
        name: "Ecuador",
        flag: "http://localhost:3000/country/img/ec.svg",
      }).save(),
      new Country({
        cod: "ee",
        name: "Estonia",
        flag: "http://localhost:3000/country/img/ee.svg",
      }).save(),
      new Country({
        cod: "eg",
        name: "Egipto",
        flag: "http://localhost:3000/country/img/eg.svg",
      }).save(),
      new Country({
        cod: "eh",
        name: "Sahara Occidental",
        flag: "http://localhost:3000/country/img/eh.svg",
      }).save(),
      new Country({
        cod: "er",
        name: "Eritrea",
        flag: "http://localhost:3000/country/img/er.svg",
      }).save(),
      new Country({
        cod: "es",
        name: "España",
        flag: "http://localhost:3000/country/img/es.svg",
      }).save(),
      new Country({
        cod: "et",
        name: "Etiopía",
        flag: "http://localhost:3000/country/img/et.svg",
      }).save(),
      new Country({
        cod: "eu",
        name: "Unión Europea",
        flag: "http://localhost:3000/country/img/eu.svg",
      }).save(),
      new Country({
        cod: "fi",
        name: "Finlandia",
        flag: "http://localhost:3000/country/img/fi.svg",
      }).save(),
      new Country({
        cod: "fj",
        name: "Fiyi",
        flag: "http://localhost:3000/country/img/fj.svg",
      }).save(),
      new Country({
        cod: "fk",
        name: "Islas Malvinas",
        flag: "http://localhost:3000/country/img/fk.svg",
      }).save(),
      new Country({
        cod: "fm",
        name: "Micronesia",
        flag: "http://localhost:3000/country/img/fm.svg",
      }).save(),
      new Country({
        cod: "fo",
        name: "Islas Feroe",
        flag: "http://localhost:3000/country/img/fo.svg",
      }).save(),
      new Country({
        cod: "fr",
        name: "Francia",
        flag: "http://localhost:3000/country/img/fr.svg",
      }).save(),
      new Country({
        cod: "ga",
        name: "Gabón",
        flag: "http://localhost:3000/country/img/ga.svg",
      }).save(),
      new Country({
        cod: "gb",
        name: "Reino Unido",
        flag: "http://localhost:3000/country/img/gb.svg",
      }).save(),
      new Country({
        cod: "gb-eng",
        name: "Inglaterra",
        flag: "http://localhost:3000/country/img/gb-eng.svg",
      }).save(),
      new Country({
        cod: "gb-nir",
        name: "Irlanda del Norte",
        flag: "http://localhost:3000/country/img/gb-nir.svg",
      }).save(),
      new Country({
        cod: "gb-sct",
        name: "Escocia",
        flag: "http://localhost:3000/country/img/gb-sct.svg",
      }).save(),
      new Country({
        cod: "gb-wls",
        name: "Gales",
        flag: "http://localhost:3000/country/img/gb-wls.svg",
      }).save(),
      new Country({
        cod: "gd",
        name: "Granada",
        flag: "http://localhost:3000/country/img/gd.svg",
      }).save(),
      new Country({
        cod: "ge",
        name: "Georgia",
        flag: "http://localhost:3000/country/img/ge.svg",
      }).save(),
      new Country({
        cod: "gf",
        name: "Guayana Francesa",
        flag: "http://localhost:3000/country/img/gf.svg",
      }).save(),
      new Country({
        cod: "gg",
        name: "Guernsey",
        flag: "http://localhost:3000/country/img/gg.svg",
      }).save(),
      new Country({
        cod: "gh",
        name: "Ghana",
        flag: "http://localhost:3000/country/img/gh.svg",
      }).save(),
      new Country({
        cod: "gi",
        name: "Gibraltar",
        flag: "http://localhost:3000/country/img/gi.svg",
      }).save(),
      new Country({
        cod: "gl",
        name: "Groenlandia",
        flag: "http://localhost:3000/country/img/gl.svg",
      }).save(),
      new Country({
        cod: "gm",
        name: "Gambia",
        flag: "http://localhost:3000/country/img/gm.svg",
      }).save(),
      new Country({
        cod: "gn",
        name: "Guinea",
        flag: "http://localhost:3000/country/img/gn.svg",
      }).save(),
      new Country({
        cod: "gp",
        name: "Guadalupe",
        flag: "http://localhost:3000/country/img/gp.svg",
      }).save(),
      new Country({
        cod: "gq",
        name: "Guinea Ecuatorial",
        flag: "http://localhost:3000/country/img/gq.svg",
      }).save(),
      new Country({
        cod: "gr",
        name: "Grecia",
        flag: "http://localhost:3000/country/img/gr.svg",
      }).save(),
      new Country({
        cod: "gs",
        name: "Islas Georgias del Sur y Sándwich del Sur",
        flag: "http://localhost:3000/country/img/gs.svg",
      }).save(),
      new Country({
        cod: "gt",
        name: "Guatemala",
        flag: "http://localhost:3000/country/img/gt.svg",
      }).save(),
      new Country({
        cod: "gu",
        name: "Guam",
        flag: "http://localhost:3000/country/img/gu.svg",
      }).save(),
      new Country({
        cod: "gw",
        name: "Guinea-Bisáu",
        flag: "http://localhost:3000/country/img/gw.svg",
      }).save(),
      new Country({
        cod: "gy",
        name: "Guyana",
        flag: "http://localhost:3000/country/img/gy.svg",
      }).save(),
      new Country({
        cod: "hk",
        name: "Hong Kong",
        flag: "http://localhost:3000/country/img/hk.svg",
      }).save(),
      new Country({
        cod: "hm",
        name: "Islas Heard y McDonald",
        flag: "http://localhost:3000/country/img/hm.svg",
      }).save(),
      new Country({
        cod: "hn",
        name: "Honduras",
        flag: "http://localhost:3000/country/img/hn.svg",
      }).save(),
      new Country({
        cod: "hr",
        name: "Croacia",
        flag: "http://localhost:3000/country/img/hr.svg",
      }).save(),
      new Country({
        cod: "ht",
        name: "Haití",
        flag: "http://localhost:3000/country/img/ht.svg",
      }).save(),
      new Country({
        cod: "hu",
        name: "Hungría",
        flag: "http://localhost:3000/country/img/hu.svg",
      }).save(),
      new Country({
        cod: "id",
        name: "Indonesia",
        flag: "http://localhost:3000/country/img/id.svg",
      }).save(),
      new Country({
        cod: "ie",
        name: "Irlanda",
        flag: "http://localhost:3000/country/img/ie.svg",
      }).save(),
      new Country({
        cod: "il",
        name: "Israel",
        flag: "http://localhost:3000/country/img/il.svg",
      }).save(),
      new Country({
        cod: "im",
        name: "Isla de Man",
        flag: "http://localhost:3000/country/img/im.svg",
      }).save(),
      new Country({
        cod: "in",
        name: "India",
        flag: "http://localhost:3000/country/img/in.svg",
      }).save(),
      new Country({
        cod: "io",
        name: "Territorio Británico del Océano Índico",
        flag: "http://localhost:3000/country/img/io.svg",
      }).save(),
      new Country({
        cod: "iq",
        name: "Irak",
        flag: "http://localhost:3000/country/img/iq.svg",
      }).save(),
      new Country({
        cod: "ir",
        name: "Irán",
        flag: "http://localhost:3000/country/img/ir.svg",
      }).save(),
      new Country({
        cod: "is",
        name: "Islandia",
        flag: "http://localhost:3000/country/img/is.svg",
      }).save(),
      new Country({
        cod: "it",
        name: "Italia",
        flag: "http://localhost:3000/country/img/it.svg",
      }).save(),
      new Country({
        cod: "je",
        name: "Jersey",
        flag: "http://localhost:3000/country/img/je.svg",
      }).save(),
      new Country({
        cod: "jm",
        name: "Jamaica",
        flag: "http://localhost:3000/country/img/jm.svg",
      }).save(),
      new Country({
        cod: "jo",
        name: "Jordania",
        flag: "http://localhost:3000/country/img/jo.svg",
      }).save(),
      new Country({
        cod: "jp",
        name: "Japón",
        flag: "http://localhost:3000/country/img/jp.svg",
      }).save(),
      new Country({
        cod: "ke",
        name: "Kenia",
        flag: "http://localhost:3000/country/img/ke.svg",
      }).save(),
      new Country({
        cod: "kg",
        name: "Kirguistán",
        flag: "http://localhost:3000/country/img/kg.svg",
      }).save(),
      new Country({
        cod: "kh",
        name: "Camboya",
        flag: "http://localhost:3000/country/img/kh.svg",
      }).save(),
      new Country({
        cod: "ki",
        name: "Kiribati",
        flag: "http://localhost:3000/country/img/ki.svg",
      }).save(),
      new Country({
        cod: "km",
        name: "Comoras",
        flag: "http://localhost:3000/country/img/km.svg",
      }).save(),
      new Country({
        cod: "kn",
        name: "San Cristóbal y Nieves",
        flag: "http://localhost:3000/country/img/kn.svg",
      }).save(),
      new Country({
        cod: "kp",
        name: "Corea del Norte",
        flag: "http://localhost:3000/country/img/kp.svg",
      }).save(),
      new Country({
        cod: "kr",
        name: "Corea del Sur",
        flag: "http://localhost:3000/country/img/kr.svg",
      }).save(),
      new Country({
        cod: "kw",
        name: "Kuwait",
        flag: "http://localhost:3000/country/img/kw.svg",
      }).save(),
      new Country({
        cod: "ky",
        name: "Islas Caimán",
        flag: "http://localhost:3000/country/img/ky.svg",
      }).save(),
      new Country({
        cod: "kz",
        name: "Kazajistán",
        flag: "http://localhost:3000/country/img/kz.svg",
      }).save(),
      new Country({
        cod: "la",
        name: "Laos",
        flag: "http://localhost:3000/country/img/la.svg",
      }).save(),
      new Country({
        cod: "lb",
        name: "Líbano",
        flag: "http://localhost:3000/country/img/lb.svg",
      }).save(),
      new Country({
        cod: "lc",
        name: "Santa Lucía",
        flag: "http://localhost:3000/country/img/lc.svg",
      }).save(),
      new Country({
        cod: "li",
        name: "Liechtenstein",
        flag: "http://localhost:3000/country/img/li.svg",
      }).save(),
      new Country({
        cod: "lk",
        name: "Sri Lanka",
        flag: "http://localhost:3000/country/img/lk.svg",
      }).save(),
      new Country({
        cod: "lr",
        name: "Liberia",
        flag: "http://localhost:3000/country/img/lr.svg",
      }).save(),
      new Country({
        cod: "ls",
        name: "Lesoto",
        flag: "http://localhost:3000/country/img/ls.svg",
      }).save(),
      new Country({
        cod: "lt",
        name: "Lituania",
        flag: "http://localhost:3000/country/img/lt.svg",
      }).save(),
      new Country({
        cod: "lu",
        name: "Luxemburgo",
        flag: "http://localhost:3000/country/img/lu.svg",
      }).save(),
      new Country({
        cod: "lv",
        name: "Letonia",
        flag: "http://localhost:3000/country/img/lv.svg",
      }).save(),
      new Country({
        cod: "ly",
        name: "Libia",
        flag: "http://localhost:3000/country/img/ly.svg",
      }).save(),
      new Country({
        cod: "ma",
        name: "Marruecos",
        flag: "http://localhost:3000/country/img/ma.svg",
      }).save(),
      new Country({
        cod: "mc",
        name: "Mónaco",
        flag: "http://localhost:3000/country/img/mc.svg",
      }).save(),
      new Country({
        cod: "md",
        name: "Moldavia",
        flag: "http://localhost:3000/country/img/md.svg",
      }).save(),
      new Country({
        cod: "me",
        name: "Montenegro",
        flag: "http://localhost:3000/country/img/me.svg",
      }).save(),
      new Country({
        cod: "mf",
        name: "San Martín (Francia)",
        flag: "http://localhost:3000/country/img/mf.svg",
      }).save(),
      new Country({
        cod: "mg",
        name: "Madagascar",
        flag: "http://localhost:3000/country/img/mg.svg",
      }).save(),
      new Country({
        cod: "mh",
        name: "Islas Marshall",
        flag: "http://localhost:3000/country/img/mh.svg",
      }).save(),
      new Country({
        cod: "mk",
        name: "Macedonia del Norte",
        flag: "http://localhost:3000/country/img/mk.svg",
      }).save(),
      new Country({
        cod: "ml",
        name: "Malí",
        flag: "http://localhost:3000/country/img/ml.svg",
      }).save(),
      new Country({
        cod: "mm",
        name: "Myanmar",
        flag: "http://localhost:3000/country/img/mm.svg",
      }).save(),
      new Country({
        cod: "mn",
        name: "Mongolia",
        flag: "http://localhost:3000/country/img/mn.svg",
      }).save(),
      new Country({
        cod: "mo",
        name: "Macao",
        flag: "http://localhost:3000/country/img/mo.svg",
      }).save(),
      new Country({
        cod: "mp",
        name: "Islas Marianas del Norte",
        flag: "http://localhost:3000/country/img/mp.svg",
      }).save(),
      new Country({
        cod: "mq",
        name: "Martinica",
        flag: "http://localhost:3000/country/img/mq.svg",
      }).save(),
      new Country({
        cod: "mr",
        name: "Mauritania",
        flag: "http://localhost:3000/country/img/mr.svg",
      }).save(),
      new Country({
        cod: "ms",
        name: "Montserrat",
        flag: "http://localhost:3000/country/img/ms.svg",
      }).save(),
      new Country({
        cod: "mt",
        name: "Malta",
        flag: "http://localhost:3000/country/img/mt.svg",
      }).save(),
      new Country({
        cod: "mu",
        name: "Mauricio",
        flag: "http://localhost:3000/country/img/mu.svg",
      }).save(),
      new Country({
        cod: "mv",
        name: "Maldivas",
        flag: "http://localhost:3000/country/img/mv.svg",
      }).save(),
      new Country({
        cod: "mw",
        name: "Malawi",
        flag: "http://localhost:3000/country/img/mw.svg",
      }).save(),
      new Country({
        cod: "mx",
        name: "México",
        flag: "http://localhost:3000/country/img/mx.svg",
      }).save(),
      new Country({
        cod: "my",
        name: "Malasia",
        flag: "http://localhost:3000/country/img/my.svg",
      }).save(),
      new Country({
        cod: "mz",
        name: "Mozambique",
        flag: "http://localhost:3000/country/img/mz.svg",
      }).save(),
      new Country({
        cod: "na",
        name: "Namibia",
        flag: "http://localhost:3000/country/img/na.svg",
      }).save(),
      new Country({
        cod: "nc",
        name: "Nueva Caledonia",
        flag: "http://localhost:3000/country/img/nc.svg",
      }).save(),
      new Country({
        cod: "ne",
        name: "Níger",
        flag: "http://localhost:3000/country/img/ne.svg",
      }).save(),
      new Country({
        cod: "nf",
        name: "Isla Norfolk",
        flag: "http://localhost:3000/country/img/nf.svg",
      }).save(),
      new Country({
        cod: "ng",
        name: "Nigeria",
        flag: "http://localhost:3000/country/img/ng.svg",
      }).save(),
      new Country({
        cod: "ni",
        name: "Nicaragua",
        flag: "http://localhost:3000/country/img/ni.svg",
      }).save(),
      new Country({
        cod: "nl",
        name: "Países Bajos",
        flag: "http://localhost:3000/country/img/nl.svg",
      }).save(),
      new Country({
        cod: "no",
        name: "Noruega",
        flag: "http://localhost:3000/country/img/no.svg",
      }).save(),
      new Country({
        cod: "np",
        name: "Nepal",
        flag: "http://localhost:3000/country/img/np.svg",
      }).save(),
      new Country({
        cod: "nr",
        name: "Nauru",
        flag: "http://localhost:3000/country/img/nr.svg",
      }).save(),
      new Country({
        cod: "nu",
        name: "Niue",
        flag: "http://localhost:3000/country/img/nu.svg",
      }).save(),
      new Country({
        cod: "nz",
        name: "Nueva Zelanda",
        flag: "http://localhost:3000/country/img/nz.svg",
      }).save(),
      new Country({
        cod: "om",
        name: "Omán",
        flag: "http://localhost:3000/country/img/om.svg",
      }).save(),
      new Country({
        cod: "pa",
        name: "Panamá",
        flag: "http://localhost:3000/country/img/pa.svg",
      }).save(),
      new Country({
        cod: "pe",
        name: "Perú",
        flag: "http://localhost:3000/country/img/pe.svg",
      }).save(),
      new Country({
        cod: "pf",
        name: "Polinesia Francesa",
        flag: "http://localhost:3000/country/img/pf.svg",
      }).save(),
      new Country({
        cod: "pg",
        name: "Papúa Nueva Guinea",
        flag: "http://localhost:3000/country/img/pg.svg",
      }).save(),
      new Country({
        cod: "ph",
        name: "Filipinas",
        flag: "http://localhost:3000/country/img/ph.svg",
      }).save(),
      new Country({
        cod: "pk",
        name: "Pakistán",
        flag: "http://localhost:3000/country/img/pk.svg",
      }).save(),
      new Country({
        cod: "pl",
        name: "Polonia",
        flag: "http://localhost:3000/country/img/pl.svg",
      }).save(),
      new Country({
        cod: "pm",
        name: "San Pedro y Miquelón",
        flag: "http://localhost:3000/country/img/pm.svg",
      }).save(),
      new Country({
        cod: "pn",
        name: "Islas Pitcairn",
        flag: "http://localhost:3000/country/img/pn.svg",
      }).save(),
      new Country({
        cod: "pr",
        name: "Puerto Rico",
        flag: "http://localhost:3000/country/img/pr.svg",
      }).save(),
      new Country({
        cod: "ps",
        name: "Palestina",
        flag: "http://localhost:3000/country/img/ps.svg",
      }).save(),
      new Country({
        cod: "pt",
        name: "Portugal",
        flag: "http://localhost:3000/country/img/pt.svg",
      }).save(),
      new Country({
        cod: "pw",
        name: "Palaos",
        flag: "http://localhost:3000/country/img/pw.svg",
      }).save(),
      new Country({
        cod: "py",
        name: "Paraguay",
        flag: "http://localhost:3000/country/img/py.svg",
      }).save(),
      new Country({
        cod: "qa",
        name: "Catar",
        flag: "http://localhost:3000/country/img/qa.svg",
      }).save(),
      new Country({
        cod: "re",
        name: "Reunión",
        flag: "http://localhost:3000/country/img/re.svg",
      }).save(),
      new Country({
        cod: "ro",
        name: "Rumania",
        flag: "http://localhost:3000/country/img/ro.svg",
      }).save(),
      new Country({
        cod: "rs",
        name: "Serbia",
        flag: "http://localhost:3000/country/img/rs.svg",
      }).save(),
      new Country({
        cod: "ru",
        name: "Rusia",
        flag: "http://localhost:3000/country/img/ru.svg",
      }).save(),
      new Country({
        cod: "rw",
        name: "Ruanda",
        flag: "http://localhost:3000/country/img/rw.svg",
      }).save(),
      new Country({
        cod: "sa",
        name: "Arabia Saudita",
        flag: "http://localhost:3000/country/img/sa.svg",
      }).save(),
      new Country({
        cod: "sb",
        name: "Islas Salomón",
        flag: "http://localhost:3000/country/img/sb.svg",
      }).save(),
      new Country({
        cod: "sc",
        name: "Seychelles",
        flag: "http://localhost:3000/country/img/sc.svg",
      }).save(),
      new Country({
        cod: "sd",
        name: "Sudán",
        flag: "http://localhost:3000/country/img/sd.svg",
      }).save(),
      new Country({
        cod: "se",
        name: "Suecia",
        flag: "http://localhost:3000/country/img/se.svg",
      }).save(),
      new Country({
        cod: "sg",
        name: "Singapur",
        flag: "http://localhost:3000/country/img/sg.svg",
      }).save(),
      new Country({
        cod: "sh",
        name: "Santa Elena, Ascensión y Tristán de Acuña",
        flag: "http://localhost:3000/country/img/sh.svg",
      }).save(),
      new Country({
        cod: "si",
        name: "Eslovenia",
        flag: "http://localhost:3000/country/img/si.svg",
      }).save(),
      new Country({
        cod: "sj",
        name: "Svalbard y Jan Mayen",
        flag: "http://localhost:3000/country/img/sj.svg",
      }).save(),
      new Country({
        cod: "sk",
        name: "Eslovaquia",
        flag: "http://localhost:3000/country/img/sk.svg",
      }).save(),
      new Country({
        cod: "sl",
        name: "Sierra Leona",
        flag: "http://localhost:3000/country/img/sl.svg",
      }).save(),
      new Country({
        cod: "sm",
        name: "San Marino",
        flag: "http://localhost:3000/country/img/sm.svg",
      }).save(),
      new Country({
        cod: "sn",
        name: "Senegal",
        flag: "http://localhost:3000/country/img/sn.svg",
      }).save(),
      new Country({
        cod: "so",
        name: "Somalia",
        flag: "http://localhost:3000/country/img/so.svg",
      }).save(),
      new Country({
        cod: "sr",
        name: "Surinam",
        flag: "http://localhost:3000/country/img/sr.svg",
      }).save(),
      new Country({
        cod: "ss",
        name: "Sudán del Sur",
        flag: "http://localhost:3000/country/img/ss.svg",
      }).save(),
      new Country({
        cod: "st",
        name: "Santo Tomé y Príncipe",
        flag: "http://localhost:3000/country/img/st.svg",
      }).save(),
      new Country({
        cod: "sv",
        name: "El Salvador",
        flag: "http://localhost:3000/country/img/sv.svg",
      }).save(),
      new Country({
        cod: "sx",
        name: "San Martín (Países Bajos)",
        flag: "http://localhost:3000/country/img/sx.svg",
      }).save(),
      new Country({
        cod: "sy",
        name: "Siria",
        flag: "http://localhost:3000/country/img/sy.svg",
      }).save(),
      new Country({
        cod: "sz",
        name: "Suazilandia",
        flag: "http://localhost:3000/country/img/sz.svg",
      }).save(),
      new Country({
        cod: "tc",
        name: "Islas Turcas y Caicos",
        flag: "http://localhost:3000/country/img/tc.svg",
      }).save(),
      new Country({
        cod: "td",
        name: "Chad",
        flag: "http://localhost:3000/country/img/td.svg",
      }).save(),
      new Country({
        cod: "tf",
        name: "Tierras Australes y Antárticas Francesas",
        flag: "http://localhost:3000/country/img/tf.svg",
      }).save(),
      new Country({
        cod: "tg",
        name: "Togo",
        flag: "http://localhost:3000/country/img/tg.svg",
      }).save(),
      new Country({
        cod: "th",
        name: "Tailandia",
        flag: "http://localhost:3000/country/img/th.svg",
      }).save(),
      new Country({
        cod: "tj",
        name: "Tayikistán",
        flag: "http://localhost:3000/country/img/tj.svg",
      }).save(),
      new Country({
        cod: "tk",
        name: "Tokelau",
        flag: "http://localhost:3000/country/img/tk.svg",
      }).save(),
      new Country({
        cod: "tl",
        name: "Timor Oriental",
        flag: "http://localhost:3000/country/img/tl.svg",
      }).save(),
      new Country({
        cod: "tm",
        name: "Turkmenistán",
        flag: "http://localhost:3000/country/img/tm.svg",
      }).save(),
      new Country({
        cod: "tn",
        name: "Túnez",
        flag: "http://localhost:3000/country/img/tn.svg",
      }).save(),
      new Country({
        cod: "to",
        name: "Tonga",
        flag: "http://localhost:3000/country/img/to.svg",
      }).save(),
      new Country({
        cod: "tr",
        name: "Turquía",
        flag: "http://localhost:3000/country/img/tr.svg",
      }).save(),
      new Country({
        cod: "tt",
        name: "Trinidad y Tobago",
        flag: "http://localhost:3000/country/img/tt.svg",
      }).save(),
      new Country({
        cod: "tv",
        name: "Tuvalu",
        flag: "http://localhost:3000/country/img/tv.svg",
      }).save(),
      new Country({
        cod: "tw",
        name: "Taiwán",
        flag: "http://localhost:3000/country/img/tw.svg",
      }).save(),
      new Country({
        cod: "tz",
        name: "Tanzania",
        flag: "http://localhost:3000/country/img/tz.svg",
      }).save(),
      new Country({
        cod: "ua",
        name: "Ucrania",
        flag: "http://localhost:3000/country/img/ua.svg",
      }).save(),
      new Country({
        cod: "ug",
        name: "Uganda",
        flag: "http://localhost:3000/country/img/ug.svg",
      }).save(),
      new Country({
        cod: "um",
        name: "Islas Ultramarinas Menores de los Estados Unidos",
        flag: "http://localhost:3000/country/img/um.svg",
      }).save(),
      new Country({
        cod: "un",
        name: "Organización de las Naciones Unidas",
        flag: "http://localhost:3000/country/img/un.svg",
      }).save(),
      new Country({
        cod: "us",
        name: "Estados Unidos",
        flag: "http://localhost:3000/country/img/us.svg",
      }).save(),
      new Country({
        cod: "us-ak",
        name: "Alaska",
        flag: "http://localhost:3000/country/img/us-ak.svg",
      }).save(),
      new Country({
        cod: "us-al",
        name: "Alabama",
        flag: "http://localhost:3000/country/img/us-al.svg",
      }).save(),
      new Country({
        cod: "us-ar",
        name: "Arkansas",
        flag: "http://localhost:3000/country/img/us-ar.svg",
      }).save(),
      new Country({
        cod: "us-az",
        name: "Arizona",
        flag: "http://localhost:3000/country/img/us-az.svg",
      }).save(),
      new Country({
        cod: "us-ca",
        name: "California",
        flag: "http://localhost:3000/country/img/us-ca.svg",
      }).save(),
      new Country({
        cod: "us-co",
        name: "Colorado",
        flag: "http://localhost:3000/country/img/us-co.svg",
      }).save(),
      new Country({
        cod: "us-ct",
        name: "Connecticut",
        flag: "http://localhost:3000/country/img/us-ct.svg",
      }).save(),
      new Country({
        cod: "us-de",
        name: "Delaware",
        flag: "http://localhost:3000/country/img/us-de.svg",
      }).save(),
      new Country({
        cod: "us-fl",
        name: "Florida",
        flag: "http://localhost:3000/country/img/us-fl.svg",
      }).save(),
      new Country({
        cod: "us-ga",
        name: "Georgia",
        flag: "http://localhost:3000/country/img/us-ga.svg",
      }).save(),
      new Country({
        cod: "us-hi",
        name: "Hawái",
        flag: "http://localhost:3000/country/img/us-hi.svg",
      }).save(),
      new Country({
        cod: "us-ia",
        name: "Iowa",
        flag: "http://localhost:3000/country/img/us-ia.svg",
      }).save(),
      new Country({
        cod: "us-id",
        name: "Idaho",
        flag: "http://localhost:3000/country/img/us-id.svg",
      }).save(),
      new Country({
        cod: "us-il",
        name: "Illinois",
        flag: "http://localhost:3000/country/img/us-il.svg",
      }).save(),
      new Country({
        cod: "us-in",
        name: "Indiana",
        flag: "http://localhost:3000/country/img/us-in.svg",
      }).save(),
      new Country({
        cod: "us-ks",
        name: "Kansas",
        flag: "http://localhost:3000/country/img/us-ks.svg",
      }).save(),
      new Country({
        cod: "us-ky",
        name: "Kentucky",
        flag: "http://localhost:3000/country/img/us-ky.svg",
      }).save(),
      new Country({
        cod: "us-la",
        name: "Luisiana",
        flag: "http://localhost:3000/country/img/us-la.svg",
      }).save(),
      new Country({
        cod: "us-ma",
        name: "Massachusetts",
        flag: "http://localhost:3000/country/img/us-ma.svg",
      }).save(),
      new Country({
        cod: "us-md",
        name: "Maryland",
        flag: "http://localhost:3000/country/img/us-md.svg",
      }).save(),
      new Country({
        cod: "us-me",
        name: "Maine",
        flag: "http://localhost:3000/country/img/us-me.svg",
      }).save(),
      new Country({
        cod: "us-mi",
        name: "Míchigan",
        flag: "http://localhost:3000/country/img/us-mi.svg",
      }).save(),
      new Country({
        cod: "us-mn",
        name: "Minnesota",
        flag: "http://localhost:3000/country/img/us-mn.svg",
      }).save(),
      new Country({
        cod: "us-mo",
        name: "Misuri",
        flag: "http://localhost:3000/country/img/us-mo.svg",
      }).save(),
      new Country({
        cod: "us-ms",
        name: "Misisipi",
        flag: "http://localhost:3000/country/img/us-ms.svg",
      }).save(),
      new Country({
        cod: "us-mt",
        name: "Montana",
        flag: "http://localhost:3000/country/img/us-mt.svg",
      }).save(),
      new Country({
        cod: "us-nc",
        name: "Carolina del Norte",
        flag: "http://localhost:3000/country/img/us-nc.svg",
      }).save(),
      new Country({
        cod: "us-nd",
        name: "Dakota del Norte",
        flag: "http://localhost:3000/country/img/us-nd.svg",
      }).save(),
      new Country({
        cod: "us-ne",
        name: "Nebraska",
        flag: "http://localhost:3000/country/img/us-ne.svg",
      }).save(),
      new Country({
        cod: "us-nh",
        name: "Nuevo Hampshire",
        flag: "http://localhost:3000/country/img/us-nh.svg",
      }).save(),
      new Country({
        cod: "us-nj",
        name: "Nueva Jersey",
        flag: "http://localhost:3000/country/img/us-nj.svg",
      }).save(),
      new Country({
        cod: "us-nm",
        name: "Nuevo México",
        flag: "http://localhost:3000/country/img/us-nm.svg",
      }).save(),
      new Country({
        cod: "us-nv",
        name: "Nevada",
        flag: "http://localhost:3000/country/img/us-nv.svg",
      }).save(),
      new Country({
        cod: "us-ny",
        name: "Nueva York",
        flag: "http://localhost:3000/country/img/us-ny.svg",
      }).save(),
      new Country({
        cod: "us-oh",
        name: "Ohio",
        flag: "http://localhost:3000/country/img/us-oh.svg",
      }).save(),
      new Country({
        cod: "us-ok",
        name: "Oklahoma",
        flag: "http://localhost:3000/country/img/us-ok.svg",
      }).save(),
      new Country({
        cod: "us-or",
        name: "Oregón",
        flag: "http://localhost:3000/country/img/us-or.svg",
      }).save(),
      new Country({
        cod: "us-pa",
        name: "Pensilvania",
        flag: "http://localhost:3000/country/img/us-pa.svg",
      }).save(),
      new Country({
        cod: "us-ri",
        name: "Rhode Island",
        flag: "http://localhost:3000/country/img/us-ri.svg",
      }).save(),
      new Country({
        cod: "us-sc",
        name: "Carolina del Sur",
        flag: "http://localhost:3000/country/img/us-sc.svg",
      }).save(),
      new Country({
        cod: "us-sd",
        name: "Dakota del Sur",
        flag: "http://localhost:3000/country/img/us-sd.svg",
      }).save(),
      new Country({
        cod: "us-tn",
        name: "Tennessee",
        flag: "http://localhost:3000/country/img/us-tn.svg",
      }).save(),
      new Country({
        cod: "us-tx",
        name: "Texas",
        flag: "http://localhost:3000/country/img/us-tx.svg",
      }).save(),
      new Country({
        cod: "us-ut",
        name: "Utah",
        flag: "http://localhost:3000/country/img/us-ut.svg",
      }).save(),
      new Country({
        cod: "us-va",
        name: "Virginia",
        flag: "http://localhost:3000/country/img/us-va.svg",
      }).save(),
      new Country({
        cod: "us-vt",
        name: "Vermont",
        flag: "http://localhost:3000/country/img/us-vt.svg",
      }).save(),
      new Country({
        cod: "us-wa",
        name: "Washington",
        flag: "http://localhost:3000/country/img/us-wa.svg",
      }).save(),
      new Country({
        cod: "us-wi",
        name: "Wisconsin",
        flag: "http://localhost:3000/country/img/us-wi.svg",
      }).save(),
      new Country({
        cod: "us-wv",
        name: "Virginia Occidental",
        flag: "http://localhost:3000/country/img/us-wv.svg",
      }).save(),
      new Country({
        cod: "us-wy",
        name: "Wyoming",
        flag: "http://localhost:3000/country/img/us-wy.svg",
      }).save(),
      new Country({
        cod: "uy",
        name: "Uruguay",
        flag: "http://localhost:3000/country/img/uy.svg",
      }).save(),
      new Country({
        cod: "uz",
        name: "Uzbekistán",
        flag: "http://localhost:3000/country/img/uz.svg",
      }).save(),
      new Country({
        cod: "va",
        name: "Ciudad del Vaticano",
        flag: "http://localhost:3000/country/img/va.svg",
      }).save(),
      new Country({
        cod: "vc",
        name: "San Vicente y las Granadinas",
        flag: "http://localhost:3000/country/img/vc.svg",
      }).save(),
      new Country({
        cod: "ve",
        name: "Venezuela",
        flag: "http://localhost:3000/country/img/ve.svg",
      }).save(),
      new Country({
        cod: "vg",
        name: "Islas Vírgenes Británicas",
        flag: "http://localhost:3000/country/img/vg.svg",
      }).save(),
      new Country({
        cod: "vi",
        name: "Islas Vírgenes de los Estados Unidos",
        flag: "http://localhost:3000/country/img/vi.svg",
      }).save(),
      new Country({
        cod: "vn",
        name: "Vietnam",
        flag: "http://localhost:3000/country/img/vn.svg",
      }).save(),
      new Country({
        cod: "vu",
        name: "Vanuatu",
        flag: "http://localhost:3000/country/img/vu.svg",
      }).save(),
      new Country({
        cod: "wf",
        name: "Wallis y Futuna",
        flag: "http://localhost:3000/country/img/wf.svg",
      }).save(),
      new Country({
        cod: "ws",
        name: "Samoa",
        flag: "http://localhost:3000/country/img/ws.svg",
      }).save(),
      new Country({
        cod: "xk",
        name: "Kosovo",
        flag: "http://localhost:3000/country/img/xk.svg",
      }).save(),
      new Country({
        cod: "ye",
        name: "Yemen",
        flag: "http://localhost:3000/country/img/ye.svg",
      }).save(),
      new Country({
        cod: "yt",
        name: "Mayotte",
        flag: "http://localhost:3000/country/img/yt.svg",
      }).save(),
      new Country({
        cod: "za",
        name: "Sudáfrica",
        flag: "http://localhost:3000/country/img/za.svg",
      }).save(),
      new Country({
        cod: "zm",
        name: "Zambia",
        flag: "http://localhost:3000/country/img/zm.svg",
      }).save(),
      new Country({
        cod: "zw",
        name: "Zimbabue",
        flag: "http://localhost:3000/country/img/zw.svg",
      }).save(),
    ]);
    console.log(values);
  } catch (e) {
    console.log(e);
  }
};
