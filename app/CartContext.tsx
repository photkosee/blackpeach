import { createContext, useEffect, useState } from "react";

type CartContextType = {
  cartItems: string[];
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
  addItem: () => {},
  removeItem: () => {},
});

type CartItems = string;

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const localStorage =
    typeof window !== "undefined" ? window.localStorage : null;
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  useEffect(() => {
    if (localStorage && localStorage.getItem("cart")) {
      setCartItems(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  }, []);

  useEffect(() => {
    if (cartItems?.length > 0) {
      localStorage?.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addItem = (itemId: string) => {
    setCartItems((prev: CartItems[]) => [...prev, itemId]);
  };

  const removeItem = (itemId: string) => {
    setCartItems((prev: CartItems[]) => prev.filter((item) => item !== itemId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
