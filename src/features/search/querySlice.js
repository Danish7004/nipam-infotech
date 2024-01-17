import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config"

const initialState = {
  loading: false,
  data: [],
  error: "",
  response: "",
};
export const searchData = createAsyncThunk(
  "product/search",
  async ({ page , search}) => {
    const response = await axios.get(
      `${config.SEARCH_URL}api_key=${config.KEY}&amp;language=en-US&query=${search}&page=${page}`
    );

    return response.data?.results;
  }
);

const querySlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(searchData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(searchData.rejected, (state, action) => {
        state.error = "rejected";
        state.loading = false;
      });
  },
});

export default querySlice.reducer;
