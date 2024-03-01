import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/carts/cartSlice";
import sidebarSlice from "./features/sidebars/sidebarSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
