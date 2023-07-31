import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    original: [],
    new: [],
    recommend: [],
    trending: [],
  },
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies.original = action.payload.original;
      state.movies.new = action.payload.new;
      state.movies.recommend = action.payload.recommend;
      state.movies.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
