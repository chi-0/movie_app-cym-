const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/";
export const IMG_URL = "https://image.tmdb.org/t/p";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2I0YTY1ZWJiNjRkZTk5NTIxOTVlMWUzODk4MDNhNiIsInN1YiI6IjY1NGIzYjFlMjg2NmZhMDEzOGE5MTExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLfRRzOh9S2jmDxeW1MhxQQCYN9DbUT6HKgkseg3k1Y",
  },
};

export const nowData = () =>
  fetch(url + "movie/now_playing?language=ko-KR", options).then((res) =>
    res.json()
  );

export const popularData = () =>
  fetch(url + "movie/popular?language=ko-KR", options).then((res) =>
    res.json()
  );
