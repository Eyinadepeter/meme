import { options } from "./fetch.js";

export const fetchData = async (URL) => {
  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return "error";
  }
};

export const display_meme = (the_meme, root) => {
  if (the_meme) {
    the_meme.memes_list.forEach((meme) => {
      const div = document.createElement("div");
      div.classList = "border-[5px] border-rose-900 ";

      div.innerHTML = `
    <p class="font-black"> ${meme.title}</p>
    <img src='${meme.url}' />
    `;

      root.append(div);
    });
    const div = document.createElement("div");

    div.innerHTML = `
    <p> ${the_meme.title}</p>
    <img src='${the_meme.url}' />
    `;

    root.append(div);
  }
};
