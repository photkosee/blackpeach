import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCart } from "@/app/types";

const initialState = {
  data: [] as ProductCart[],
  totalCost: 0,
};

const updateTotalCost = (data: ProductCart[]) => {
  return data.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductCart>) {
      const productInCart = state.data.find(
        (product) => product.id === action.payload.id
      );

      if (productInCart) {
        productInCart.quantity += action.payload.quantity;
        state.totalCost += productInCart.price;
      } else {
        state.data.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      state.totalCost = updateTotalCost(state.data);
    },

    increaseQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const productToUpdate = state.data.find((product) => product.id === id);

      if (productToUpdate) {
        productToUpdate.quantity += quantity;
      }
      state.totalCost = updateTotalCost(state.data);
    },

    decreaseQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const productToUpdate = state.data.find((product) => product.id === id);

      if (productToUpdate) {
        productToUpdate.quantity -= quantity;
        if (productToUpdate.quantity <= 0) {
          const tempCart = state.data.filter(
            (product) => product.id !== action.payload.id
          );
          state.data = tempCart;
        }
      }
      state.totalCost = updateTotalCost(state.data);
    },

    removeItem(state, action: PayloadAction<{ id: number }>) {
      const tempCart = state.data.filter(
        (product) => product.id !== action.payload.id
      );
      state.data = tempCart;
      state.totalCost = updateTotalCost(state.data);
    },

    RESET(state) {
      state.data = [];
      state.totalCost = 0;
    },
  },
});

export const {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  RESET,
} = cartSlice.actions;
export default cartSlice.reducer;
