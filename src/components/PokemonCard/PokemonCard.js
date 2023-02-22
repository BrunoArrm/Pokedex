import React, { useEffect, useState } from 'react';
import './PokemonCard.css';
import './PokemonCardMainTypes.css';
import './PokemonCardAllTypes.css';
import { getPokemonData } from '../Api/GetPokemonsAPI';

function PokemonCard( { name } ) {
    
    const [mainImg, setMainImg] = useState("");
    const [mainType, setMainType] = useState("normal");
    const [secType, setSecType] = useState();

    useEffect(() => {
        const fetchPokemon = async () => {
            const currentPokemon = await getPokemonData(name);

            setMainImg(currentPokemon.sprites?.other?.dream_world.front_default);
            setMainType(currentPokemon.types[0]?.type.name);
            setSecType(currentPokemon.types.length > 1 ? currentPokemon.types[1]?.type.name : 'notShow');
            

        };
        fetchPokemon();
    }, [name]);

    return (
        <div className='pokemonCard'>
            <div className={`detailContainer mainType-${mainType}`}>
                <div className='details'>
                    <div><h3>{name}</h3></div>
                    <div className='details-type'>
                        <div className={`type ${mainType}`}><h4>{mainType}</h4></div>
                        <div className={`type ${secType}`}><h4>{secType}</h4></div>
                    </div>
                </div>
            </div>
            <img className="pokemonImg" src={mainImg} alt={name}/>
        </div>
    );
}

export default PokemonCard;