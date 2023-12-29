import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from '../../common/apis/Movieapi'
import { APIKEY } from '../../common/apis/Movieapikey'

export const fetchAsyncMovie = createAsyncThunk("movies/fetchAyncMovie", async () => {
    const movieTitle = "batman"
    try {
        const response = await Movieapi.get(`?apiKey=${APIKEY}&s=${movieTitle}&type=movie`);
        const movies = response.data;
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
    extraReducers:(builder)=> {
        builder
        .addCase(fetchAsyncMovie.pending ,(state) => {
            console.log("pending");
        })
        .addCase(fetchAsyncMovie.fulfilled, (state, action) => {
            console.log("pending");
            return {...state, movies: action.payload};
        })
        .addCase(fetchAsyncMovie.rejected,(state)=>{
            console.log("rejected");
        });
    }
});
export const { addmovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;