import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import portalReducer from "./portalSlice"
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        portal: portalReducer
    }
})

export default appStore;