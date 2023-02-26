import React, { createContext, useState, useEffect } from 'react';

export const GetFavoriteListContext = createContext();

export const GetFavoriteListProvider = ({ children }) => {
    const favoritePokemons = [];
    const [doIt, setDoIt] = useState("");

    const whatToDo = (order) => {
        setDoIt(order)
    }

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            favoritePokemons.unshift(localStorage.key(i));
        }
        console.log(`Lista atualizada de pokemons: ${favoritePokemons}`)
    }, [doIt])

    return <GetFavoriteListContext.Provider value={{whatToDo, favoritePokemons}}>
        {children}
    </GetFavoriteListContext.Provider>
}