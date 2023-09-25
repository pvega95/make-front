import { useEffect } from "react";
import { CardCustom } from "../Card/Card";
import { ECListContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { handleMovies } from "../../actions/movies";
import { TypeMovie } from "../../constant/type-movies";

interface ListMoviesProps {
  type: TypeMovie;
}

export const ListMovies = ({ type }: ListMoviesProps) => {
  const { moviesFiltered } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleMovies(type));
  }, []);

  return (
    <>
      <ECListContainer>
        {moviesFiltered.map((movie: any, index: any) => (
          <CardCustom key={index} movie={movie} />
        ))}
      </ECListContainer>
    </>
  );
};
