import './App.css';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import { GetPokemonsProvider } from './components/Context/GetPokemonContext';
import { GetPokemonDataProvider } from './components/Context/GetPokemonDataContext';
import { PaginationProvider } from './components/Context/PaginationContext';
import MyPokemon from './components/MyPokemon/MyPokemon';
import Footer from './components/Footer/Footer';
import { GetFavoriteListProvider } from './components/Context/GetFavoriteListContext';

function App() {
  return (
    <PaginationProvider>
      <GetPokemonsProvider>
        <GetPokemonDataProvider>
          <GetFavoriteListProvider>
            <Header />
            <MyPokemon />
            <Pokedex />
            <Footer />
          </GetFavoriteListProvider>
        </GetPokemonDataProvider>
      </GetPokemonsProvider>
    </PaginationProvider>
  );
}

export default App;
