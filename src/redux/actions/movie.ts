import types from "./types";

export const setMovie = (movies: any) => {
  return {
    type: types.SET_MOVIE,
    movies,
  };
};

export const clearMovie = () => {
  return {
    type: types.CLEAR_MOVIE,
  };
};
