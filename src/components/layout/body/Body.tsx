import { ECCard } from "../../Card/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from 'react-query'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { loadMovies } from "../../../actions/movies";
import { IMovie } from "../../../interface/movies";
import { CardCategory } from "../../Card/CardCategory";

export const fetchMovies = (): any => {
  return axios.get<IMovie[]>('/sample.json')
}

export const Body = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, data, error, isSuccess } = useQuery('todos', fetchMovies)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    console.log('error')
    return <span>Error: </span>
  }

  if(isSuccess) {
    const response = data
    const movies = response.data;
    dispatch(loadMovies(movies.entries));
  }
  

  const handleRedirect = (route: string) => {
    navigate(route);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={1}>
          <div onClick={() => handleRedirect("series")}>
            <CardCategory title='SERIES' description='Popular Series' />
          </div>
        </Grid>
        <Grid xs={1}>
          <div onClick={() => handleRedirect("movies")}>
            <CardCategory title='MOVIES' description='Popular Movies'/>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
