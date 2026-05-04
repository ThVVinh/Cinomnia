import { useEffect, useState } from "react";
import type { Movie } from "../configs/Models";
import { CartContext } from "./CartContext";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Movie[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (movie: Movie) => {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === movie.id)) {
        return prevItems; // Movie already in cart, do not add again
      }
      return [...prevItems, movie];
    });
  };

  const removeFromCart = (movieId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== movieId),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
