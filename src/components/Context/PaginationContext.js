import React, { createContext, useContext, useState } from 'react';
import { GetPokemonsContext } from './GetPokemonContext';

export const PaginationContext = createContext();

export const PaginationProvider = ( { children } ) => {
    const [offset, setOffset] = useState(0);
    const pokemonsPerPage = 50;
    const maxPokemons = 1279;
    const totalPages = Math.ceil(maxPokemons / pokemonsPerPage);
    const [page, setPage] = useState(1);

    const pageBack = () => {
        if ( page > 1 ) {
            setPage(page - 1);
            setOffset(offset - pokemonsPerPage);
        }
    }

    const pageFoward = () => {
        if ( page < totalPages ) {
            setPage(page + 1);
            setOffset(offset + pokemonsPerPage);
        }
    }

    return  <PaginationContext.Provider value={{ pageBack, pageFoward, pokemonsPerPage, offset, totalPages, page }}>
                {children}
            </PaginationContext.Provider>
}