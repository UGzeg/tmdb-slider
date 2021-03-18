import axios from "axios";

export const API_KEY = "7d6507ce330b14d2b2d52131a5a535d9";
export const URL = "https://api.themoviedb.org/3";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}`,
  fetchPopularMovie: `/movie/popular?api_key=${API_KEY}`,
  fetchUpcomingMovie: `/movie/upcoming?api_key=${API_KEY}`,
  fetchMovie: `/discover/movie?api_key=${API_KEY}`,
  fetchTV: `/discover/tv?api_key=${API_KEY}`,
};

export const baseImgUrl = "https://image.tmdb.org/t/p/original";

export const instance = axios.create({
  baseURL: `${URL}`,
})