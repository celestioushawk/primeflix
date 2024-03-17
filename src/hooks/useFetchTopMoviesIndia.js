import { useDispatch } from "react-redux";
import { addTopMoviesIndia } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchTopMoviesIndia = () => {
    const dispatch = useDispatch();

    const fetchTopMoviesIndia = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/discover/movie?with_origin_country=IN&sort_by=popularity.desc", API_OPTIONS)
            const jsonData = await data.json();
            dispatch(addTopMoviesIndia(jsonData.results));
            console.log(jsonData);
        } catch (error) {
            console.error("Error fetching top movies from india", error);
        }
    }

    useEffect(() => {
        fetchTopMoviesIndia();
    }, [])
};

export default useFetchTopMoviesIndia;