import { types } from "../types/types";

const initialState = {
  movies: [],
  moviesFiltered: [],
  active: null,
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.moviesList:
      return {
        ...state,
        movies: action.payload,
      };

    case types.moviesFiltered:
      return {
        ...state,
        moviesFiltered: action.payload,
      };

    case types.moviesUpdated:
      return {
        ...state,
        movies: state.movies.filter(
          (movie: any) => movie.programType === action.payload
        ),
      };

    default:
      return state;
  }
};
