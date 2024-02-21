import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div className="h-full">
            <Header />
            <MainContainer />
        </div>
    );
}

export default Browse;