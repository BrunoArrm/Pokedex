import React, { useContext, useState, useEffect } from 'react';
import './MyPokemon.css';
import '../../PokemonCard/PokemonCardMainTypes.css';
import { GetPokemonDataContext } from '../GetPokemonDataContext';
import NormalStats from '../../NormalStats/NormalStats';
import BattleStats from '../../BattleStats/BattleStats';

function MyPokemon() {

    const { name, img, mainType, hide} = useContext(GetPokemonDataContext);
    
    return (
        <>
          {!hide && (
            <div className={`myPokemon mainType-${mainType}`}>
              <p className="myPokemon-title">{name}</p>
              <button className="mypokemon-closeButton"></button>
              <div className="pokemonStats">
                <div className="myPokemon-stats">
                  <NormalStats />
                </div>
                <div className="myPokemon-img">
                  <img src={img} alt={name} />
                </div>
                <div className="myPokemon-battleStats">
                  <BattleStats />
                </div>
              </div>
            </div>
          )}
        </>
      );
    }
    

export default MyPokemon