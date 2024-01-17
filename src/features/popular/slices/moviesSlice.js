import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from '../../../config';

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};
export const fetchAllMovies = createAsyncThunk(
  "product/fetchProducts",
  async ({page}) => {
    
    const response = await axios.get(`${config.BASE_URL}/popular?api_key=${config.KEY}&amp;language=en-US&page=${page}`);
    

    return response.data?.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllMovies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.error = "rejected";
        state.loading = false;
      });

  },
});

export default moviesSlice.reducer;
