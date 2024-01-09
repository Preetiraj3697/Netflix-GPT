import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    popularMovies:null,
    trailerVideo:null,
    topRatedMovies:null,
    upcomingMovies:null,
  },
  reducers:{
    addMovies:(state,action)=>{
     state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo : (state,action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatingMovies: (state,action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies:(state,action) => {
      state.upcomingMovies = action.payload;
    }
    
  }

});
export const {addMovies,addTrailerVideo,addPopularMovies,addTopRatingMovies,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;