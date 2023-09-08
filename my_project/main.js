import "./style.css";

import { URL, options } from "./lib/fetch.js";
import { display_meme, fetchData } from "./lib/util.js";

const root = document.getElementById("root");

const fetch_meme = async () => {
  const the_meme = await fetchData(URL, options);
  console.log(the_meme);
  display_meme(the_meme, root);
};

fetch_meme();
