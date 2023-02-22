import './App.css';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import { GetPokemonsProvider } from './components/Context/GetPokemonContext';
import { GetPokemonDataProvider } from './components/Context/GetPokemonDataContext';

function App() {
  return (
    <GetPokemonsProvider>
      <GetPokemonDataProvider>
        <Header />
        <Pokedex />
      </GetPokemonDataProvider>
    </GetPokemonsProvider>
  );
}

export default App;
