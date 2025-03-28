import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
}

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isSidebarOpen: false,
    isDarkMode: false,
  } as initialStateTypes,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setSidebarOpen, setDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
