import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./weatherDetailsSlice";
export default configureStore({
  reducer: {
    searchSlice,
  },
});
