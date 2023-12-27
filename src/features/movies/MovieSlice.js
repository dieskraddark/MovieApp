import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {}
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addmovies: (state, action) => {
            state.movies = action.payload;
        }
    }
});
export const { addmovies } = movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export default movieSlice.reducer;