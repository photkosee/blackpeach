"use client";

import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import { CartContextProvider } from "./CartContext";
import store from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </NextUIProvider>
    </Provider>
  );
}
