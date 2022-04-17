import { moviesType } from "../models/movie";

type objectType = {
  [key: string | number]: moviesType;
};

export type movieStateType = {
  movies?: objectType;
};
