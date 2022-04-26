import { queryAllMovies } from "../action/logics/movie";
import { getMovieData } from "../redux/feeder";

const Home = () => {
  queryAllMovies();

  const movies = getMovieData();

  console.log("movies", movies);

  return <div></div>;
};

export default Home;
