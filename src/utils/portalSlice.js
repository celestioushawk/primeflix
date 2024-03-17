import { createSlice } from "@reduxjs/toolkit";

const portalSlice = createSlice(
    {
        name: "portal",
        initialState: {
            showSearch: false,
        },
        reducers: {
            toggleSearch: (state) => {
                state.showSearch = !state.showSearch;
            }
        }
    }
)

export const { toggleSearch } = portalSlice.actions;

export default portalSlice.reducer;