export function banderaDePaisImg(pais) {
  const codigo = obtenerCodigoISO(pais); // Necesitas esta función también
  if (!codigo) return pais;
  return `<img src="https://flagcdn.com/w40/${codigo}.png" alt="${pais}" title="${pais}" style="height:25px;">`;
}

function obtenerCodigoISO(pais) {
  const mapa = {
    espana: "es",
    españa: "es",
    francia: "fr",
    brasil: "br",
    argentina: "ar",
    alemania: "de",
    italia: "it",
    portugal: "pt",
    paraguay: "py",
    venezuela: "ve",
    albania: "al",
    angola: "ao",
    chile: "cl",
    uruguay: "uy",
    marruecos: "ma",
    tunez: "tn",
    guinea: "gn",
    guinea_bisau: "gw",
    "guinea-bisau": "gw",
    "guinea ecuatorial": "gq",
    suecia: "se",
    serbia: "rs",
    camerun: "cm",
    colombia: "co",
    republica_dominicana: "do",
    "republica dominicana": "do",
    grecia: "gr",
    japon: "jp",
    mexico: "mx",
    croacia: "hr",
    rusia: "ru",
    ucrania: "ua",
    austria: "at",
    israel: "il",
    turquia: "tr",
    gambia: "gm",
    arabia_saudi: "sa",
    "arabia saudi": "sa",
    canada: "ca",
    bosnia_herzegovina: "ba",
    "bosnia-herzegovina": "ba",
    estonia: "ee",
    suiza: "ch",
    hungria: "hu",
    ecuador: "ec",
    nigeria: "ng",
    senegal: "sn",
    ghana: "gh",
    "costa rica": "cr",
    costa_rica: "cr",
    mali: "ml",
    belgica: "be",
    polonia: "pl",
    holanda: "nl",
    inglaterra: "gb",
    togo: "tg",
    // Países adicionales
    australia: "au",
    china: "cn",
    india: "in",
    nueva_zelanda: "nz",
    "nueva zelanda": "nz",
    dinamarca: "dk",
    finlandia: "fi",
    noruega: "no",
    peru: "pe",
    "perú": "pe",
    egipto: "eg",
    sudáfrica: "za",
    "sudafrica": "za",
    irlanda: "ie",
    corea_del_sur: "kr",
    "corea del sur": "kr",
    filipinas: "ph",
    indonesia: "id",
    malasia: "my",
    singapur: "sg",
    tailandia: "th",
    vietnam: "vn",
    // Nacionalidades adicionales
    belarus: "by",
    "republica checa": "cz",
    "república checa": "cz",
    eslovaquia: "sk",
    eslovenia: "si",
    letonia: "lv",
    lituania: "lt",
    luxemburgo: "lu",
    islandia: "is",
    andorra: "ad",
    mónaco: "mc",
    liechtenstein: "li",
    macedonia: "mk",
    moldavia: "md",
    san_marino: "sm",
    "san marino": "sm",
    vaticano: "va",
    kazajistán: "kz",
    "kazajistan": "kz",
    kirguistán: "kg",
    "kirguistan": "kg",
    tayikistán: "tj",
    "tayikistan": "tj",
    turkmenistán: "tm",
    "turkmenistan": "tm",
    uzbekistán: "uz",
    "uzbekistan": "uz",
    bangladesh: "bd",
    sri_lanka: "lk",
    "sri lanka": "lk",
    nepal: "np",
    bután: "bt",
    "butan": "bt",
    camboya: "kh",
    laos: "la",
    myanmar: "mm",
    birmania: "mm",
    brunei: "bn",
    timor_leste: "tl",
    "timor leste": "tl",
    papua_nueva_guinea: "pg",
    "papua nueva guinea": "pg",
    fiyi: "fj",
    samoa: "ws",
    tuvalu: "tv",
    kiribati: "ki",
    islas_marshall: "mh",
    "islas marshall": "mh",
    islas_salomón: "sb",
    "islas salomon": "sb",
    vanuatu: "vu",
    micronesia: "fm",
    nauru: "nr",
    palau: "pw",
    tonga: "to"
  };
  // Normaliza el nombre para buscarlo en el mapa
  let key = pais.trim().toLowerCase()
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ü/g, "u")
    .replace(/ñ/g, "n")
    .replace(/\s+/g, "_");
  return mapa[key];
}
