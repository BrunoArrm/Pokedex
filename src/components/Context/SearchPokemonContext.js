import React, {createContext, useContext} from 'react';

export const SearchPokemonContext = createContext();

export const SearchPokemonProvider = ({children}) => {

    return <SearchPokemonProvider.Provider value={{}}>
                {children}
            </SearchPokemonProvider.Provider>
}