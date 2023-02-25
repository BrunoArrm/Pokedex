import React, { useContext, useState, useEffect } from 'react';
import './MyPokemon.css';
import '../PokemonCard/PokemonCardMainTypes.css';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';
import NormalStats from '../NormalStats/NormalStats';
import BattleStats from '../BattleStats/BattleStats';

function MyPokemon() {

    const { name, mainImg, secImg, mainType, hide, erro} = useContext(GetPokemonDataContext);
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    
    const backToPokemonCard = () => {
      const myPokemon = document.getElementById(name);
      myPokemon.scrollIntoView({behavior: 'smooth', block: "start"});
  };

    return (
        <>
          {
            erro == "Pokemon não encontrado" 
          ? 
            <div className={`myPokemon mainType-normal`} style={{height: "fit-content"}}>
              <div className='erro-message-img'></div>
              <p>
                Pokemon "{name}" não foi encontrado!
              </p>
            </div> 
          : 
            !hide && (
              <div className={`myPokemon mainType-${mainType}`} id="myPokemon">
                <p className="myPokemon-title">{name}</p>
                <div className="pokemonStats">
                  <div className="myPokemon-battleStats">
                      <BattleStats />
                      <NormalStats />
                  </div>
                  <div className="myPokemon-img">
                    <img src={mainImg ? mainImg : secImg} alt={name} onClick={backToPokemonCard} />
                  </div>
                </div>
              </div>
            )}
        </>
      );
    }
    

export default MyPokemon;