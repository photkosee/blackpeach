import { combineReducers, createStore } from "@reduxjs/toolkit";
import cartSlice from "./features/carts/cartSlice";
import sidebarSlice from "./features/sidebars/sidebarSlice";
import addressSlice from "./features/addresses/addressSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  bp_cart: cartSlice,
  bp_sidebar: sidebarSlice,
  bp_address: addressSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
