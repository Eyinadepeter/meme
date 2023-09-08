export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_X_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_X_RAPID_API_HOST,
  },
};

export const URL = `https://memes9.p.rapidapi.com/api/list?genre=memes&type=top`;
