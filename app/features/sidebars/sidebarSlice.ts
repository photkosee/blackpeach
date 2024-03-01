import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  isMenuOpen: false,
};

const sidebarSlice = createSlice({
  name: "bp_sidebar",
  initialState,
  reducers: {
    openCart(state) {
      state.isCartOpen = true;
    },

    closeCart(state) {
      state.isCartOpen = false;
    },

    openMenu(state) {
      state.isMenuOpen = true;
    },

    closeMenu(state) {
      state.isMenuOpen = false;
    },
  },
});

export const { openCart, closeCart, openMenu, closeMenu } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
