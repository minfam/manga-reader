import "dotenv/config";
import cron from "node-cron";

import "#root/db/connection";
import Manga from "#root/db/models/Manga";
import { fetchAllMangas } from "#root/mangaSources/mangaEden";

const seed = async () => {
  const res = await fetchAllMangas("en");
  await Manga.insertMany(res.data.manga);
  console.log("seed");
};

seed();

cron.schedule("0 * * * *", () => {
  console.log("running a task every minute");
});
