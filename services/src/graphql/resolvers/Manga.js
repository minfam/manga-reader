import { fetchMangaInfo } from "#root/mangaSources/mangaEden";

const Manga = {
  id: (mangaObj) => mangaObj._id,
  info: async (mangaObj) => {
    const res = await fetchMangaInfo({ mangaId: mangaObj._id });
    return {
      chapters: res.data.chapters,
      id: mangaObj._id,
    };
  },
  lastUpdated: (mangaObj) => new Date(mangaObj.lastUpdated * 1000),
};

export default Manga;
