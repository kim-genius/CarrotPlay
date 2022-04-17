import { requestURL } from "../../../@types/utils/api";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchURL: requestURL = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko&region=KR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko&region=KR`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko&region=KR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko&region=KR`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko&region=KR`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko&region=KR`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko&region=KR`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko&region=KR`,
};
