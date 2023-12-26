import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
};

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        addmovies:(state, action )=>{
            state.movies= action.payload
        }
    }
});
export const {addmovies}= movieSlice.actions;
export default movieSlice.reducer;