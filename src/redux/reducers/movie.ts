import { movieStateType } from "../../@types/reducers/movie";
import types from "../actions/types";

const initialState: movieStateType = {
  movies: {},
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_MOVIE:
      const { movies } = action;
      return { ...state, movies };

    case types.CLEAR_MOVIE:
      return {
        movies: {},
      };
    default:
      return state;
  }
};

export default movieReducer;
