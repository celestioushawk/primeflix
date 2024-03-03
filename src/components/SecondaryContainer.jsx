import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {


  const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);

  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies)

  if (nowPlayingMovies === null) return;

  return (
    <div className="p-10 flex flex-col gap-10">
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
    </div>
  );
}

export default SecondaryContainer;