import { createContext } from "react";
import type { Movie } from "../configs/Models";

type CartContextType = {
  cartItems: Movie[];
  addToCart: (movie: Movie) => void;
  removeFromCart: (movieId: number) => void;
  clearCart: () => void;
};
export const CartContext = createContext<CartContextType | null>(null);
