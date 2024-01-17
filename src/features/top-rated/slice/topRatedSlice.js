import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};
export const fetchTopRatedMovies = createAsyncThunk(
  "product/fetchProducts",
  async ({ page }) => {
    const response = await axios.get(
      `${config.BASE_URL}/top_rated?api_key=${config.KEY}&amp;language=en-US&page=${page}`
    );

    return response.data?.results;
  }
);

const topRatedSlice = createSlice({
  name: "topRated",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchTopRatedMovies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.error = "rejected";
        state.loading = false;
      });
  },
});

export default topRatedSlice.reducer;
