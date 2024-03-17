import { useDispatch } from "react-redux";
import { addCastData, addSimilarMovies, addSingleMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useFetchSingleMovie = ({ movieID, setIsLoadingFalse }) => {
    const dispatch = useDispatch();
    const fetchSingleMovieData = async (id) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addSingleMovie(jsonData));

        const similarMovies = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`, API_OPTIONS);
        const similarMoviesData = await similarMovies.json();
        dispatch(addSimilarMovies(similarMoviesData.results));

        const castData = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, API_OPTIONS);
        const castDataJson = await castData.json();
        dispatch(addCastData(castDataJson));
    }
    useEffect(() => {
        fetchSingleMovieData(movieID);
        setTimeout(() => {
            setIsLoadingFalse();
        }, 1000);
        return () => {
            dispatch(addSingleMovie(null));
            dispatch(addSimilarMovies(null));
            dispatch(addCastData(null));
        }
    }, [movieID])
}

export default useFetchSingleMovie;