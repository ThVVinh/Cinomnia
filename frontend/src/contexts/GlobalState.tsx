// import { createContext } from "react-router-dom";
// import type { MovieModel } from "../models/MovieModel";
// import AppReducer from "./AppReducer";
// import { useEffect, useReducer, type ReactNode } from "react";
// interface AppState {
//   watchlist: MovieModel[];
//   watched: MovieModel[];
//   watching: MovieModel[];
//   store: MovieModel[];
// }

// // Define the type for the context value
// interface GlobalContextValue extends AppState {
//   addMovieToWatchlist: (movie: MovieModel) => void;
//   removeMovieFromWatchlist: (id: string) => void;
//   addMovieToWatched: (movie: MovieModel) => void;
//   moveToWatchlist: (movie: MovieModel) => void;
//   removeFromWatched: (id: string) => void;
//   addMovieToWatching: (movie: MovieModel) => void;
//   removeFromWatching: (id: string) => void;
//   addMovieToStore: (movie: MovieModel) => void;
//   removeMovieFromStore: (id: string) => void;
// }

// // Initial state
// const initialState: AppState = {
//   watchlist: localStorage.getItem("watchlist")
//     ? JSON.parse(localStorage.getItem("watchlist")!)
//     : [],
//   watched: localStorage.getItem("watched")
//     ? JSON.parse(localStorage.getItem("watched")!)
//     : [],
//   watching: localStorage.getItem("watching")
//     ? JSON.parse(localStorage.getItem("watching")!)
//     : [],
//   store: localStorage.getItem("store")
//     ? JSON.parse(localStorage.getItem("store")!)
//     : [],
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const GlobalContext = createContext<GlobalContextValue>({
//   ...initialState,
//   addMovieToWatchlist: () => {},
//   removeMovieFromWatchlist: () => {},
//   addMovieToWatched: () => {},
//   moveToWatchlist: () => {},
//   removeFromWatched: () => {},
//   addMovieToWatching: () => {},
//   removeFromWatching: () => {},
//   addMovieToStore: () => {},
//   removeMovieFromStore: () => {},
// });


// // Provider components
// interface GlobalProviderProps {
//   children: ReactNode;
// }

// export const GlobalProvider: React.FC<GlobalProviderProps> = (props) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   useEffect(() => {
//     localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
//     localStorage.setItem("watched", JSON.stringify(state.watched));
//     localStorage.setItem("store", JSON.stringify(state.store));
//   }, [state]);

//   // Actions
//   const addMovieToWatchlist = (movie: MovieModel) => {
//     dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
//   };
//   const removeMovieFromWatchlist = (id: string) => {
//     dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
//   };

//   const addMovieToWatched = (movie: MovieModel) => {
//     dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
//   };

//   const moveToWatchlist = (movie: MovieModel) => {
//     dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
//   };

//   const removeFromWatched = (id: string) => {
//     dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
//   };

//   const addMovieToWatching = (movie: MovieModel) => {
//     dispatch({ type: "ADD_MOVIE_TO_WATCHING", payload: movie });
//   };

//   const removeFromWatching = (id: string) => {
//     dispatch({ type: "REMOVE_FROM_WATCHING", payload: id });
//   };

//   const addMovieToStore = (movie: MovieModel) => {
//     dispatch({ type: "ADD_MOVIE_TO_STORE", payload: movie });
//   };
//   const removeMovieFromStore = (id: string) => {
//     dispatch({ type: "REMOVE_MOVIE_FROM_STORE", payload: id });
//   };
//   // Add any other action functions here

//   return (
//     <GlobalContext.Provider
//       value={{
//         ...state,
//         addMovieToWatchlist,
//         removeMovieFromWatchlist,
//         addMovieToWatched,
//         moveToWatchlist,
//         removeFromWatched,
//         addMovieToWatching,
//         removeFromWatching,
//         addMovieToStore,
//         removeMovieFromStore,
//       }}
//     >
//       {props.children}
//     </GlobalContext.Provider>
//   );
// };
