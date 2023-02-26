import React, { useContext, useEffect, useState } from 'react';
import './PokemonCard.css';
import './PokemonCardMainTypes.css';
import './PokemonCardAllTypes.css';
import { getPokemonData } from '../Api/GetPokemonsAPI';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';

function PokemonCard( { name } ) {
    
    const [mainImg, setMainImg] = useState("");
    const [secImg, setSecImg] = useState("");
    const [mainType, setMainType] = useState("normal");
    const [secType, setSecType] = useState();
    const { updatePokemonName } = useContext(GetPokemonDataContext);
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    const [heart, setHeart] = useState("💛");


    useEffect(() => {
        const fetchPokemon = async () => {
            const currentPokemon = await getPokemonData(name);

            setMainImg(currentPokemon.sprites?.other?.dream_world.front_default);
            setSecImg(currentPokemon.sprites?.front_default);
            setMainType(currentPokemon.types[0]?.type.name);
            setSecType(currentPokemon.types.length > 1 ? currentPokemon.types[1]?.type.name : 'notShow');
        };
        fetchPokemon();
    }, [name]);

    useEffect(()=>{
        if(localStorage.getItem(name)) {
            setHeart("❤️")
        } else {
            setHeart("💛")
        }
    },[])

    const handleClickPokemonCard = () => {
        updatePokemonName(name);
        const myPokemon = document.getElementById("myPokemon");
        myPokemon.scrollIntoView({behavior: 'smooth', block: "start"});
    };

    const handleClickHeartButton = (event) => {
        event.stopPropagation();
        if (localStorage.getItem(name)) {
            localStorage.removeItem(name);
            setHeart("💛")
            console.log(`Desfavoritou: ${name}`);
        } else {
            localStorage.setItem(name, name);
            setHeart("❤️")
            console.log(`Favoritou: ${name}`);
        }
    }

    return (
        <div className='pokemonCard' id={name}>
            <div onClick={handleClickPokemonCard} onPress={handleClickPokemonCard} className={`detailContainer mainType-${mainType}`}>
                <div className='details'>
                    <div className='detailContainer-title'>
                        <button onClick={handleClickHeartButton} onPress={handleClickHeartButton}>{heart}</button>
                        <h3>{name}</h3>
                    </div>
                    <div className='details-type'>
                        <div className={`type ${mainType}`}><h4>{mainType}</h4></div>
                        <div className={`type ${secType}`}><h4>{secType}</h4></div>
                    </div>
                </div>
            </div>
            {secImg ? (
                <img className="pokemonImg" src={mainImg ? mainImg : secImg} alt={name} onClick={handleClickPokemonCard} onPress={handleClickPokemonCard} />
            ) : <img src={logo} alt="PokéApi" title="PokéApi"/> }
        </div>
    );
}

export default PokemonCard;