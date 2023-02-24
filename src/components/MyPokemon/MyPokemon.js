import React, { useContext, useState, useEffect } from 'react';
import './MyPokemon.css';
import '../PokemonCard/PokemonCardMainTypes.css';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';
import NormalStats from '../NormalStats/NormalStats';
import BattleStats from '../BattleStats/BattleStats';

function MyPokemon() {

    const { name, img, mainType, hide} = useContext(GetPokemonDataContext);
    
    return (
        <>
          {!hide && (
            <div className={`myPokemon mainType-${mainType}`}>
              <p className="myPokemon-title">{name}</p>
              <div className="pokemonStats">
                <div className="myPokemon-battleStats">
                    <BattleStats />
                    <NormalStats />
                </div>
                <div className="myPokemon-img">
                  <img src={img} alt={name} />
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
    

export default MyPokemon