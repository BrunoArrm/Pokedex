import React, { useContext, useState, useEffect } from 'react';
import { GetFavoriteListContext } from '../Context/GetFavoriteListContext';
import FavoritePokemon from '../FavoritePokemon/FavoritePokemon';
import './FavoritePokemons.css';

function FavoritePokemons() {
    const { favoritePokemons } = useContext(GetFavoriteListContext);
    const [list, setList] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        setList(favoritePokemons);
        
    }, [favoritePokemons]);

  return (
        <div className='favoritePokemons'>
            <h2>Favoritos</h2>
            <div className='favoritePokemons-list'>
            {
                list.map((pokemon) => (
                    <FavoritePokemon key={pokemon} name={pokemon} />
                ))
            }
            </div>
        </div>
    )
}

export default FavoritePokemons;