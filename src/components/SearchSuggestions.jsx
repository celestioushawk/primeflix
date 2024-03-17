import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SearchSuggestions = () => {

    const searchedMovies = useSelector((state) => state.movies?.searchMovies)

    if (!searchedMovies) return;

    console.log(searchedMovies);

    return (
        <div className="w-3/4">
            <MovieList movies={searchedMovies} />
        </div>
    )
}

export default SearchSuggestions