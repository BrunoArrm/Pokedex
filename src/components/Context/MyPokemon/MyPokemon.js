import React, { useContext } from 'react';
import './MyPokemon.css';
import { GetPokemonDataContext } from '../GetPokemonDataContext';

function MyPokemon() {

    const { name, img, id, height, 
            weight, hp, atk, xAtk, 
            def, xDef, spd, mainType} = useContext(GetPokemonDataContext);

  return (
    <div className='myPokemon'>
        <p className='myPokemon-title'>{name}</p>
        <button className='mypokemon-closeButton'></button>
        <div className='pokemonStats'>
            <div className='myPokemon-stats pokemonStats-detailContainer'>
                
            </div>
            <div className='myPokemon-img pokemonStats-detailContainer'>
                <img src={img}/>
            </div>
            <div className='myPokemon-battleStats pokemonStats-detailContainer'>

            </div>
        </div>
    </div>
  )
}

export default MyPokemon