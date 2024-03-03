import { useDispatch } from "react-redux";
import { addSingleMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useFetchSingleMovie = (movieID) => {
    const dispatch = useDispatch();
    const fetchSingleMovieData = async (id) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addSingleMovie(jsonData));
    }
    useEffect(() => {
        fetchSingleMovieData(movieID);
    }, [])
}

export default useFetchSingleMovie;