import { moviesType, movieType } from "../@types/models/movie";
import store from "./store";

export const getMovieData = () => {
  return store.getState().movie.movies;
};
