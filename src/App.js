import './App.css';
/* Components */
import MoviesData from './components/MoviesData';
import Navbar from './components/Navbar';
import ContextTheme from './context/contextTheme';
import ContextFavorites from './context/contextFavorites';
import FavoriteMovies from './components/FavoriteMovies';
import DetailMovie from './components/DetailMovie';
/* React Router */
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ContextSearch from './context/contextSearch';

//Poner un trailer
function App() {
  return (
    <ContextTheme>
      <ContextFavorites>
        <ContextSearch>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<MoviesData/>}/>
              <Route path='/favorites' element={<FavoriteMovies/>}/>
              <Route path='/detail/:movieTitle/:movieId' element={<DetailMovie/>}/>
            </Routes>
          </BrowserRouter>
        </ContextSearch>
      </ContextFavorites>
    </ContextTheme>
  );
}

export default App;
