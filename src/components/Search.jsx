import { useRef } from "react";
import OpenAI from "openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../utils/portalSlice";
import { setSearchMovies } from "../utils/movieSlice";
import SearchSuggestions from "./SearchSuggestions";
const Search = () => {

    let searchText = useRef("");

    const dispatch = useDispatch();

    const fetchSearchedMovieFromAPI = async (searchText) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const data = await response.json();
        return data?.results[0];
    }

    const handleCloseSearch = () => {
        dispatch(toggleSearch(false));
        dispatch(setSearchMovies(null));
    }

    const handleSubmitSearch = async () => {
        const openai = new OpenAI({
            apiKey: import.meta.env.VITE_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true,
        })
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `Act as a movie recommandation system and get me 7 names of ${searchText.current.value} in a JSON format with key 'movies' and inside it only array of movie names and not list like structure of 1. 2. none of that.` }],
            model: 'gpt-3.5-turbo',
        });
        console.log(chatCompletion.choices[0].message.content);
        const gptMoviesResponse = chatCompletion.choices[0].message.content
        const gptMoviesArray = JSON.parse(gptMoviesResponse)?.movies;
        console.log(gptMoviesArray);
        const promiseArray = gptMoviesArray.map((movieString) => fetchSearchedMovieFromAPI(movieString.trim()));
        const movieData = await Promise.all(promiseArray);
        console.log(movieData);
        dispatch(setSearchMovies(movieData));
    }

    return (
        <div className="fixed bg-black bg-opacity-90 flex flex-col gap-10 items-center pt-28 w-full h-full overflow-hidden z-[100]">
            <button className="text-white absolute top-10 right-10 bg-gray-500 rounded-full bg-opacity-80 p-2" onClick={handleCloseSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="w-full h-fit flex justify-center gap-2">
                <input type="text" ref={searchText} placeholder="Search for movies and more..." className="block p-4 outline-none rounded placeholder-gray-800 w-1/2 bg-gray-300 shadow-md shadow-gray-900" />
                <button className="text-white inline-flex bg-red-600 items-center gap-2 p-4 whitespace-nowrap rounded font-medium" onClick={handleSubmitSearch}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                    </span>
                    <span>AI Search</span>
                </button>
            </div>
            <SearchSuggestions />
        </div>
    );
}

export default Search;