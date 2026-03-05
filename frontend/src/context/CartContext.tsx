import { createContext, useState } from "react";

export const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}