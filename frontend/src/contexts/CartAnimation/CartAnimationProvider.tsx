import { useRef } from "react";
import { CartAnimationContext } from "./CartAnimationContext";

export function CartAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cartRef = useRef<HTMLButtonElement>(null);

  return (
    <CartAnimationContext.Provider value={{ cartRef }}>
      {children}
    </CartAnimationContext.Provider>
  );
}