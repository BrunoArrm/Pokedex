import React, { createContext } from 'react';

export const FavoritePokemonsContext = createContext();

export const FavoritePokemonsProvider = ({ children }) => {


    return <FavoritePokemonsProvider.Provider value={{}}>
        {children}
    </FavoritePokemonsProvider.Provider>
}