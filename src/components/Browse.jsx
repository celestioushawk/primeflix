import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Search from "./Search";
import SecondaryContainer from "./SecondaryContainer";
import useFetchMovieGenres from "../hooks/useFetchMovieGenres";
import useFetchTopMoviesIndia from "../hooks/useFetchTopMoviesIndia";

const Browse = () => {

    useNowPlayingMovies();

    useTopRatedMovies();

    useFetchMovieGenres();

    useFetchTopMoviesIndia();

    return (
        <div className="h-max bg-black">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
}

export default Browse;