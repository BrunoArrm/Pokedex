import React, { useContext } from "react";
import "./Pokedex.css";
import { GetPokemonsContext } from "../Context/GetPokemonContext";
import PokemonCard from "../PokemonCard/PokemonCard";

function Pokedex() {
  const { pokemons } = useContext(GetPokemonsContext);

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard name={pokemon.name} />
      ))}
    </>
  );
}

export default Pokedex;