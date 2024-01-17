import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};
export const fetchUpcomingMovies = createAsyncThunk(
  "fetch/upcomingMovies",
  async ({ page }) => {
    const response = await axios.get(
      `${config.BASE_URL}/upcoming?api_key=${config.KEY}&amp;language=en-US&page=${page}`
    );

    return response.data?.results;
  }
);

const upcomingSlice = createSlice({
  name: "upcomingMovies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUpcomingMovies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.error = "rejected";
        state.loading = false;
      });
  },
});

export default upcomingSlice.reducer;
