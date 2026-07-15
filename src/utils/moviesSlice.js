import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovies: [],
    movieTrailer : null ,
    popularMovies : [],
    trendingMovies : [],
    upcomingMovies : [],
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
     addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    getTrailer: (state , action) => {
       state.movieTrailer = action.payload
    }
  },
});

export const { addNowPlayMovies, addPopularMovies , addTrendingMovies , addUpcomingMovies ,getTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;