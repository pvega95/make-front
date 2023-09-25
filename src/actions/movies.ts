import { TypeMovie } from "../constant/type-movies";
import { types } from "../types/types";

export const handleMovies = (programType: TypeMovie): any => {
  return (dispatch: any, getState: any) => {
    const moviesList = getState().app;
    const movies = moviesList.movies;

    const filteredMovies = movies.filter(
      (movie: any) => movie.releaseYear >= 2010
    );

    const filteredByProgramType = filteredMovies.filter(
      (movie: any) => movie.programType === programType
    );

    const sortedMovies = filteredByProgramType.sort((a:any, b:any) =>
      a.title.localeCompare(b.title)
    );

    const result = sortedMovies.slice(0, 20);
    dispatch(filterMovies(result));
  };
};

export const loadMovies = (movies: any) => ({
  type: types.moviesList,
  payload: [...movies],
});

export const filterMovies = (movies: any) => ({
  type: types.moviesFiltered,
  payload: [...movies],
});

export const updateMovies = (typeMovie: "series" | "movie") => ({
  type: types.moviesUpdated,
  payload: typeMovie,
});
