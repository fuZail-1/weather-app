import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_CITY_NAME } from "../config/app-constant";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    city: DEFAULT_CITY_NAME,
  },
  reducers: {
    city: (state) => {
      state.city = state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { city } = searchSlice.actions;

export default searchSlice.reducer;
