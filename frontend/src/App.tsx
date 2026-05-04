import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MainLayout } from "./layouts/MainLayout";
import { MoviesByGenre } from "./pages/MoviesByGenre/MoviesByGenre";
import { Profile } from "./pages/Profile/Profile";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Login/Login";
import { MoviePlayer } from "./pages/MoviesPlayer/MoviePlayer";
import { PrivateRoute } from "./auth/PrivateRoute";
import { useAuth } from "./auth/useAuth";
function App() {
  const { user } = useAuth();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<MoviesByGenre />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/movie/:id" element={<MoviePlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
