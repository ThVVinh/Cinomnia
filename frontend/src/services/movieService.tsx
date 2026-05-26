import type { Media, Movie } from "../configs/Models";
import api from "../utils/api";

export const movieService = {
    getTopRatingMovies: async(): Promise<Movie[]> => {
        const res = await api.get("/movies/top-ratings");
        return res.data;
    },

    getTopNewestMovies: async (): Promise<Movie[]> => {
        const res = await api.get("/movies/top-newest");
        return res.data;
    },

    getMovieDetails: async (id: number): Promise<Movie> => {
        const response = await api.get(`/movies/${id}`);
        return response.data;
    },

    getMovieVideoUrl: async (id: number): Promise<Media> => {
        const response = await api.get(`/movies/${id}/media`);
        return response.data;
    },

    searchMoviesByTitle: async (title: string): Promise<Movie[]> => {
        const response = await api.get(`/movies/search?title=${encodeURIComponent(title)}`);
        return response.data;
    }
}