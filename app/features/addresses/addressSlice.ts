import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressInfo } from "@/app/types";

const initialState = {
  address: {} as AddressInfo,
};

const addressSlice = createSlice({
  name: "bp_address",
  initialState,
  reducers: {
    setAddress(state, action: PayloadAction<AddressInfo>) {
      state.address = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;
