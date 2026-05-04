export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    raterCount: number;
    averageRating: number;
    posterUrl: string;
    price: number;
    duration: number; // duration in minutes
}

export interface OwnedMovie {
    userId: number;
    movieId: number;
}

export interface MovieGenre {
    movieId: number;
    genreId: number;
}

export interface People {
    id: number;
    name: string;
    biography: string;
    dob: string; // date of birth
    profileUrl: string;
    gender: string;
}

export interface Cast {
    id: number;
    characterName: string;
}

export interface Crew {
    id: number;
    job: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Media {
    id: number;
    movideId: number;
    type: string; // e.g., "Trailer", "Clip"
    url: string;
}

export interface Review {
    id: number;
    createdAt: string; // date string
    movieId: number;
    userName: string;
    rating: number; // rating out of 5
    content: string;
}

export interface Transaction {
    id: number;
    userId: number;
    transactionDate: string; // date string
    totalAmount: number;
}

export interface TransactionDetail {
    transactionId: number;
    movieId: number;
    price: number;
}

export interface User {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    gender: string;
    dob: string; // date of birth
}

export interface WatchProgress {
    userId: number;
    movieId: number;
    progress: number; // progress in percentage
}