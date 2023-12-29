import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from '../../common/apis/Movieapi'
import { APIKEY } from '../../common/apis/Movieapikey'

export const fetchAsyncMovie = createAsyncThunk("movies/fetchAyncMovie", async () => {
    const movieTitle = "batman"
    try {
        const response = await Movieapi.get(`?apiKey=${APIKEY}&s=${movieTitle}&type=movie`);
        const nextres = await Movieapi.get(`?apiKey=${APIKEY}&s=${movieTitle}&type=series`);
        const movies = response.data;
        const series = nextres.data;
        return { movies, series }
    }
    catch (error) {
        console.log('error fetching movies:', error);
        return Promise.reject(error);
    }
})

const initialState = {
    movies: {},
    series: {} 
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addmovies: (state, action) => {
            state.movies = action.payload.movies;
            state.series = action.payload.series;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovie.pending, () => {
                console.log("pending");
            })
            .addCase(fetchAsyncMovie.fulfilled, (state, action) => {
                console.log("fullfilled");
                return { ...state, movies: action.payload.movies, series:action.payload.series};
            })
            .addCase(fetchAsyncMovie.rejected, () => {
                console.log("rejected");
            });
    }
});
export const { addmovies } = movieSlice.actions;
export default movieSlice.reducer;