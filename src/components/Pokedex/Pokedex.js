import React, { useContext } from "react";
import "./Pokedex.css";
import { GetPokemonsContext } from "../Context/GetPokemonContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import IsLoading from "../IsLoading/IsLoading";

export default function Pokedex() {
    const { pokemons, isLoading } = useContext(GetPokemonsContext);
  
    return (
      <div className="pokedex">
        {isLoading ? (
          <IsLoading />
        ) : (
        pokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        )))}
      </div>
    );
  }