import Manga from "#root/db/models/Manga";

const mangasResolver = (context, args) => {
  return Manga.findById(args.id);
};

export default mangasResolver;
