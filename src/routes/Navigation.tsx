import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { Title } from "../components/layout/title/Title";
import { Body } from "../components/layout/body/Body";
import { ListMovies } from "../components/ListMovies/ListMovies";
import { TypeMovie } from "../constant/type-movies";
import { Footer } from "../components/footer/Footer";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <Nav/>
        <Title/>
        <Routes>
          <Route path="/series"  element={ <ListMovies type={TypeMovie.SERIES}/> }>
          </Route>
          <Route path="/movies" element={ <ListMovies type={TypeMovie.MOVIES}/> }>
          </Route>
          <Route path="/" element={ <Body/> }>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};
