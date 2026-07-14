import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovies: [],
    movieTrailer : null ,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovies = action.payload;
    },
    getTrailer: (state , action) => {
       state.movieTrailer = action.payload
    }
  },
});

export const { addNowPlayMovies ,getTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;