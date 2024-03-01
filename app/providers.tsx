"use client";

import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";
import { CartContextProvider } from "./CartContext";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}
