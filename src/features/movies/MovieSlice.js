import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from '../../common/apis/Movieapi'
import { APIKEY } from '../../common/apis/Movieapikey'

export const fetchAsyncMovie = createAsyncThunk("movies/fetchAyncMovie", async () => {
    const movieTitle = "batman"
    try {
        const response = await Movieapi.get(`?apiKey=${APIKEY}&s=${movieTitle}&type=movie`);
        const movies = response.data
        return movies
    }
    catch (error) {
        console.log('error fetching movies:', error);
        return Promise.reject(error);
    }
})

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
    },
    extraReducers:{
        [fetchAsyncMovie.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovie.fulfilled]:()=>{
            console.log("pending")
        }
    }
});
export const { addmovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;