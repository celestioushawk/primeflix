import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector((state) => state.movies?.nowPlayingMovies);

    if (movies === null) return;

    const heroMovie = movies[4]

    return (
        <div className="bg-pink-200 relative h-[80vh] flex items-center overflow-hidden">
            <VideoTitle videoTitle={heroMovie?.original_title} videoSummary={heroMovie?.overview}  />
            <VideoBackground videoID={heroMovie?.id} />
        </div>
    );
}

export default MainContainer;