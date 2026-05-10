import api from "../utils/api";

export const ownedMoviesService = {
    getOwnedMovies: async (): Promise<number[]> => {
        const res = await api.get("/owned-movies");
        return res.data;
    },
}