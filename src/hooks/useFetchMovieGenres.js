import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGenres } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useFetchMovieGenres = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovieGenres = async () => {
        try {
            const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list`, API_OPTIONS
            );
            const data = await response.json();
            dispatch(addGenres(data?.genres));
        } catch (error) {
            console.error("Error fetching movie genres", error);
        }
        };
        fetchMovieGenres();
    }, []);
}

export default useFetchMovieGenres;