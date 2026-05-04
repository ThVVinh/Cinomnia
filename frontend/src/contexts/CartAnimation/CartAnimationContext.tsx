import { createContext, useContext } from "react";

type CartAnimationContextType = {
  cartRef: React.RefObject<HTMLButtonElement | null>;
};

export const CartAnimationContext =
  createContext<CartAnimationContextType | null>(null);


export const useCartAnimation = () => {
  const ctx = useContext(CartAnimationContext);
  if (!ctx) throw new Error("useCartAnimation must be used inside provider");
  return ctx;
};
