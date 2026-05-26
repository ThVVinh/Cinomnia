import { ownedMoviesService } from "../../services/ownedMoviesServices";
import { CartView } from "./CartView";

export function Cart() {
  const purchaseMovies = ownedMoviesService.purchaseMovies;

  const fakePaymentProcess = async (movieIds: number[]) => {
    try {
        await purchaseMovies(movieIds);
        return true;
    } catch (error) {
        console.error("Payment failed:", error);
        return false;
    }
    };

  return <CartView paymentProcess={fakePaymentProcess} />;
}
