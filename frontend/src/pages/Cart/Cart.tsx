import { ownedMoviesService } from "../../services/ownedMoviesServices";
import { CartView } from "./CartView";

export function Cart() {
  const purchaseMovies = ownedMoviesService.purchaseMovies;

  const fakePaymentProcess = async (movieIds: number[]) => {
    try {
        console.log("Processing payment for movies:", movieIds);
        await purchaseMovies(movieIds);
        return true;
    } catch (error) {
        console.error("Payment failed:", error);
        return false;
    }
    };

  return <CartView paymentProcess={fakePaymentProcess} />;
}
