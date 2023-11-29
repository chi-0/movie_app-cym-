import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2I0YTY1ZWJiNjRkZTk5NTIxOTVlMWUzODk4MDNhNiIsInN1YiI6IjY1NGIzYjFlMjg2NmZhMDEzOGE5MTExZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLfRRzOh9S2jmDxeW1MhxQQCYN9DbUT6HKgkseg3k1Y",
  },
  params: {
    language: "ko-KR",
  },
});

export const detailData = ({ queryKey }) => {
  const [id] = queryKey;

  return instance.get(`movie/${id}`).then((res) => res.data);
};