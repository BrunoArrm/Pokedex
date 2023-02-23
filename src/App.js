import './App.css';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import { GetPokemonsProvider } from './components/Context/GetPokemonContext';
import { GetPokemonDataProvider } from './components/Context/GetPokemonDataContext';
import Pagination from './components/Pagination/Pagination';
import { PaginationProvider } from './components/Context/PaginationContext';
import MyPokemon from './components/Context/MyPokemon/MyPokemon';

function App() {
  return (
    <PaginationProvider>
      <GetPokemonsProvider>
        <GetPokemonDataProvider>
            <Header />
            <MyPokemon />
            <Pokedex />
            <Pagination />
        </GetPokemonDataProvider>
      </GetPokemonsProvider>
    </PaginationProvider>
  );
}

export default App;
