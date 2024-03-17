import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchSingleMovie from "../hooks/useFetchSingleMovie";
import { useSelector } from "react-redux";
import Header from "./Header";
import SingleMovieShimmer from "./shimmer-ui/SingleMovieShimmer";
import MovieList from "./MovieList";
import MovieCredits from "./MovieCredits";

const SingleMovie = () => {

    const [isLoading, setIsLoading] = useState(true);

    const setIsLoadingFalse = () => {
        setIsLoading(false);
    }

    const movieID = useParams().movieId;

    useFetchSingleMovie({ movieID, setIsLoadingFalse });

    const singleMovieData = useSelector((state) => state.movies?.singleMovie);

    const similarMoviesData = useSelector((state) => state.movies?.similarMovies);

    const movieCastData = useSelector((state) => state.movies?.castData?.cast.slice(0, 6));

    console.log(singleMovieData);

    const style = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w780/${singleMovieData?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div className="">
            <Header />
            <main className="h-full grid grid-cols-7">
                {!isLoading ? <section className="bg-black pt-28 text-white col-span-3 flex  items-center pl-10">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-bold z-[99]">{singleMovieData?.title}</h1>
                        <p className="z-[99] w-5/6">{singleMovieData?.overview?.substring(0,250)}</p>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-medium">Genres</h2>
                            <div className="flex items-center gap-2">
                                {singleMovieData?.genres?.map((genre) => {
                                    return <span key={genre.id} className="bg-gray-600 bg-opacity-50 px-3 py-1 rounded-full">{genre.name}</span>
                                })}
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span>{singleMovieData?.release_date}</span>
                            <span className="inline-flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <span>{singleMovieData?.vote_average?.toFixed(1)}</span>
                            </span>
                            <span>{singleMovieData?.runtime} mins</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-medium">Languages</h2>
                            <div className="flex items-center gap-2">
                                {singleMovieData?.spoken_languages?.map((language) => {
                                    return <span key={language.iso_639_1} className="bg-gray-600 bg-opacity-50 px-3 py-1 rounded-full">{language.english_name}</span>
                                })}
                            </div>
                        </div>
                        <button className="bg-white w-fit inline-flex text-black font-medium rounded-md  py-4 px-5 gap-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span>Watch Trailer</span>
                        </button>
                        <MovieCredits castData={movieCastData} />
                    </div>
                </section> : <SingleMovieShimmer />}
                <section className="col-span-4 relative bg-gradient-to-r from-black overflow-x-hidden">
                    <div className="absolute w-full h-full -z-10" style={style}></div>
                </section>
            <div className="bg-black col-span-7 px-10 pt-5 pb-10">
                <MovieList title="Similar Movies" movies={similarMoviesData} />
            </div>
            </main>
        </div>
    )
};

export default SingleMovie;