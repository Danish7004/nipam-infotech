import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/popular/slices/moviesSlice";
import upcomingSlice from "./features/upcoming/slice/upcomingSlice";
import topRatedSlice from "./features/top-rated/slice/topRatedSlice";
import detailSlice from "./features/details/detailSlice";
import querySlice from "./features/search/querySlice";

const rootReducer = combineReducers({
  movies: moviesSlice,
  upcomingMovies: upcomingSlice,
  topRated:topRatedSlice,
  details: detailSlice,
  search: querySlice
})

const store = configureStore({
  reducer: rootReducer
})

export default store;