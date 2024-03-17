import { useSelector } from "react-redux";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";

const VideoBackground = ({ videoID }) => {
    
    const trailerVideoID = useSelector((state) => state.movies?.trailerVideo);
    
    useFetchMovieTrailer(videoID)

    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <iframe width="560" height="315" className="w-full h-full scale-150" src={"https://www.youtube.com/embed/" + trailerVideoID + "?autoplay=1&mute=1&controls=0"} title="YouTube video player"></iframe>
        </div>
    );
}

export default VideoBackground;