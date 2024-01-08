"use client";

import { NextUIProvider } from "@nextui-org/react";
import { CartContextProvider } from "./CartContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </NextUIProvider>
  );
}
