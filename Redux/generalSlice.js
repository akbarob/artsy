import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  navbarVisible: true,
  footerVisible: false,
  userData: {},
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
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export const { setNavbarVisibility, setFooterVisibility, setUserData } =
  generalSlice.actions;
export default generalSlice.reducer;
