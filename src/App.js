import './App.css';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import { GetPokemonsProvider } from './components/Context/GetPokemonContext';

function App() {
  return (
    <GetPokemonsProvider>
      <Header />
      <Pokedex />
    </GetPokemonsProvider>
  );
}

export default App;
