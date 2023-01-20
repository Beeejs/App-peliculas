import './App.css';
/* Components */
import MoviesData from './components/MoviesData';
import Navbar from './components/Navbar';
import ContextTheme from './context/contextTheme';

function App() {
  return (
    <ContextTheme>
      <Navbar/>
      <MoviesData/>
    </ContextTheme>
  );
}

export default App;
