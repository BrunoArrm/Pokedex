import React, { useContext } from "react";
import "./Pokedex.css";
import { GetPokemonsContext } from "../Context/GetPokemonContext";
import PokemonCard from "../PokemonCard/PokemonCard";

export default function Pokedex() {
    const { pokemons } = useContext(GetPokemonsContext);
  
    return (
      <div className="pokedex">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    );
  }