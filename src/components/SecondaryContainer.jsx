import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import SlickCards from "./SlickCards";

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);

  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies)

  const movieGenres = useSelector((state) => state.movies?.genres);

  const topMoviesIndia = useSelector((state) => state.movies?.topMoviesIndia);

  if (nowPlayingMovies === null) return;

  if (topRatedMovies === null) return;

  return (
    <div className="p-10 flex flex-col gap-10">
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Top Movies in India" movies={topMoviesIndia} />
      <SlickCards genres={movieGenres} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
    </div>
  );
}

export default SecondaryContainer;