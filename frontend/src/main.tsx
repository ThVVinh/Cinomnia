import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthProvider } from "./auth/AuthProvider.tsx";
import { CartProvider } from "./contexts/CartProvider.tsx";
import { CartAnimationProvider } from "./contexts/CartAnimation/CartAnimationProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <CartAnimationProvider>
          <App />
        </CartAnimationProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
);
