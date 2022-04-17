export type movieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type moviesType = {
  fetchTrending: movieType[];
  fetchNetflixOriginals: movieType[];
  fetchTopRated: movieType[];
  fetchActionMovies: movieType[];
  fetchComedyMovies: movieType[];
  fetchHorrorMovies: movieType[];
  fetchRomanceMovies: movieType[];
  fetchDocumentaries: movieType[];
};
