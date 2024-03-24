import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import { Route, Routes } from 'react-router-dom';
import NotFound from './views/NotFound';
import Home from './views/Home';
import Pokemons from './views/Pokemons';
import PokemonDetails from './views/PokemonDeteils';



function App() {


  return (
    <>
      <MyNav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path='/pokemons/:name' element={<PokemonDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
