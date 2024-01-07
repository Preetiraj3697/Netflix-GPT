import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
  },
  reducers:{
    addMovies:(state,action)=>{
     state.nowPlayingMovies = action.payload;
    }
  }

});
export const {addMovies} = moviesSlice.actions;
export default moviesSlice.reducer;