import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovieTrailer = (videoID) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${videoID}/videos?language=en-US`, API_OPTIONS);
        const jsonData = await data.json();
        const movieTrailers = jsonData.results.filter((video) => video.type === "Trailer");
        const trailer = movieTrailers.length > 0 ? movieTrailers[0] : jsonData.results[0];
        dispatch(addTrailerVideo(trailer.key));
    }

    useEffect(() => {
        getMovieVideos();
    }, []);

}

export default useFetchMovieTrailer;