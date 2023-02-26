import React, { useContext, useEffect, useState } from 'react';
import './FavoritePokemon.css';
import { getPokemonData } from '../Api/GetPokemonsAPI';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';

function FavoritePokemon({name}) {
    const {updatePokemonName} = useContext(GetPokemonDataContext);
    const [mainImg, setMainImg] = useState("");
    const [secImg, setSecImg] = useState("");
    const [backImg, setBackImg] = useState("");

    useEffect(() => {
        const fetchPokemon = async () => {
            const currentPokemon = await getPokemonData(name);
            setMainImg(currentPokemon.sprites?.other?.dream_world.front_default);
            setSecImg(currentPokemon.sprites?.front_default);
            setBackImg(currentPokemon.sprites?.back_default);

        };
        fetchPokemon();
    }, [name]);

    const handleClickPokemonCard = () => {
        updatePokemonName(name);
        const myPokemon = document.getElementById("myPokemon");
        myPokemon.scrollIntoView({behavior: 'smooth', block: "start"});
    };

  return (
    <div className='favoritePokemon' onClick={handleClickPokemonCard}>
        <img src={secImg} alt={name} className="mainImg" />
    </div>
  )
}

export default FavoritePokemon;