import gloabalAxios from "axios";

export const axios = gloabalAxios.create({
  baseURL: process.env.MANGA_EDEN_URL,
});

const transformChapters = (chapters) =>
  chapters.map(([number, lastUpdated, title, id]) => ({
    id,
    lastUpdated,
    number,
    title,
  }));

const transformMangas = (mangas) =>
  mangas
    .filter((manga) => manga.ld)
    .map(
      ({
        a: alias,
        c: categories,
        h: hits,
        i: _id,
        im: image,
        ld: lastUpdated,
        s: status,
        t: title,
      }) => ({
        _id,
        alias,
        categories,
        hits,
        image,
        lastUpdated,
        status,
        title,
      })
    );

export const fetchAllMangas = (lang) => {
  const langKey = { en: 0 }[lang];
  return axios.get(`list/${langKey}/`).then((res) => {
    res.data.manga = transformMangas(res.data.manga);
    return res;
  });
};

export const fetchMangaInfo = ({ mangaId }) => {
  return axios.get(`/manga/${mangaId}/`).then((res) => {
    console.log("aaa");
    res.data.chapters = transformChapters(
      res.data.chapters
    );
    return res;
  });
};
