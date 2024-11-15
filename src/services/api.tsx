import axios from "axios";

export const api = axios.get(
  "https://api.themoviedb.org/3/movie/popular?api_key=e6cd3fd17fe21531be8890bd2fda04b3&language=en-US&page=1"
);
export const apiSeries = axios.get(
  "https://api.themoviedb.org/3/tv/popular?api_key=e6cd3fd17fe21531be8890bd2fda04b3&language=en-US&page=1"
);

export const apiRatedMovies = axios({
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/top_rated",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmNkM2ZkMTdmZTIxNTMxYmU4ODkwYmQyZmRhMDRiMyIsInN1YiI6IjY0NjM5YjhkZGJiYjQyMDEzNjM4ODNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPcVxq_-43Il-FBQe-O4fuStRkkZYp57sULDPo7QDdk",
  },
});

export const apiPopularMovies = axios({
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmNkM2ZkMTdmZTIxNTMxYmU4ODkwYmQyZmRhMDRiMyIsInN1YiI6IjY0NjM5YjhkZGJiYjQyMDEzNjM4ODNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPcVxq_-43Il-FBQe-O4fuStRkkZYp57sULDPo7QDdk",
  },
});
