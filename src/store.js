import { configureStore } from "@reduxjs/toolkit";
import pasteSlice from "./Redux/pasteSlice";

const store = configureStore({
  reducer: {
    pastes: pasteSlice,
  },
});

export default store;
