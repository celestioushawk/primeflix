import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Search from "./Search";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();

    useTopRatedMovies();

    return (
        <div className="h-max bg-black">
            {/* <Search /> */}
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
}

export default Browse;