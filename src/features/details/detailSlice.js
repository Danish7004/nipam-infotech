import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

const initialState = {
  loading: false,
  data: [],
  cast:[],
  error: "",
  response: "",
};
export const fetchDetail = createAsyncThunk(
  "movies/details",
  async ({id}) => {
      const response = await axios.get(`${config.BASE_URL}/${id}?api_key=${config.KEY}&amp;language=en-US`);
   return response.data
  }
);
export const fetchCastDetail = createAsyncThunk(
  "movies/castDetails",
  async ({id}) => {
      const response = await axios.get(`${config.BASE_URL}/${id}/credits?api_key=${config.KEY}&amp;language=en-US`);
   return response.data.cast
  }
);

const detailSlice = createSlice({
  name: "details",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchDetail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.error = "rejected";
        state.loading = false;
      });
    builder
      .addCase(fetchCastDetail.fulfilled, (state, action) => {
        state.cast = action.payload;
        state.loading = false;
      })
      .addCase(fetchCastDetail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCastDetail.rejected, (state, action) => {
        state.error = "rejected";
        state.loading = false;
      });

  },
});

export default detailSlice.reducer;
