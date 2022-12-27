import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  navbarVisible: true,
  footerVisible: false,
};
export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setNavbarVisibility: (state, action) => {
      state.navbarVisible = action.payload;
    },
    setFooterVisibility: (state, action) => {
      state.footerVisible = action.payload;
    },
  },
});
export const { setNavbarVisibility, setFooterVisibility } =
  generalSlice.actions;
export default generalSlice.reducer;
