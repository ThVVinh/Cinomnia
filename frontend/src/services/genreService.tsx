import type { Genre } from "../configs/Models";
import api from "../utils/api";

export const genreService = {
  getGenres: async (): Promise<Genre[]> => {
    const res = await api.get("/genres");
    return res.data;
  },

  getMoviesByGenre: async (genreId: number) => {
    const res = await api.get(`/movies/genre/${genreId}`);
    return res.data;
  }
};
