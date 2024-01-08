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

export const GetFullDetails = createAsyncThunk("movie/GetFullDetails", async (id) => {
    try {
        const response = await Movieapi.get(`?apikey=${APIKEY}&i=${id}&plot=full`);
        const getDetails = response.data;
        
        return getDetails;
    } catch (error) {
        console.log('error fetching movies:', error);
    }
})

const initialState = {
    movies: {},
    series: {},
    getDetails: {},

};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeMovies: (state) => {
            state.getDetails = "";

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovie.pending, () => {
                console.log("pending");
            })
            .addCase(fetchAsyncMovie.fulfilled, (state, action) => {
                return { ...state, movies: action.payload.movies, series: action.payload.series };
            })
            .addCase(fetchAsyncMovie.rejected, () => {
                console.log("rejected");
            })
            .addCase(GetFullDetails.fulfilled, (state, action) => {
                return { ...state, getDetails: action.payload }
            });
    }
});
export const { removeMovies } = movieSlice.actions;
export default movieSlice.reducer;