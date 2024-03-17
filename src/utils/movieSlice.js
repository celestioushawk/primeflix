import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        singleMovie: null,
        searchMovies: null,
        similarMovies: null,
        castData: null,
        genres: null,
        topMoviesIndia: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addSingleMovie: (state, action) => {
            state.singleMovie = action.payload;
        },
        setSearchMovies: (state, action) => {
            state.searchMovies = action.payload;
        },
        addSimilarMovies: (state, action) => {
            state.similarMovies = action.payload;
        },
        addCastData: (state, action) => {
            state.castData = action.payload;
        },
        addGenres: (state, action) => {
            state.genres = action.payload;
        },
        addTopMoviesIndia: (state, action) => {
            state.topMoviesIndia = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addSingleMovie, setSearchMovies, addSimilarMovies, addCastData, addGenres, addTopMoviesIndia } = moviesSlice.actions;