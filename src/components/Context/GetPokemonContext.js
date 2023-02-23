import React, { useState, useEffect, createContext, useContext } from 'react';
import { getPokemons } from '../Api/GetPokemonsAPI';
import { PaginationContext } from './PaginationContext';

export const GetPokemonsContext = createContext();

export const GetPokemonsProvider = ({children}) => {

    const { offset, pokemonsPerPage } = useContext(PaginationContext);
    const [pokemons, setPokemons] = useState([]);

    useEffect( () => { // useEffect responsável por alterar os componentes quando a API é chamada
        async function fetchPokemons() { // Este useEffect recebe uma função assíncrona chamada fetchPokemons
          const pokemonsData = await getPokemons(pokemonsPerPage, offset); // A função fetchPokemons armazena os dados retornados pela API na constante "pokemonsData"
          setPokemons(pokemonsData.results); // O manipulador da variável "pokemons" recebe o resultado retornado pela API, alterando-o posteriormente
          console.log(`Busca de pokemons concluída: ${pokemonsPerPage} por página e deslocamento iniciando em ${offset}`);
        }
        fetchPokemons();
      }, [offset]);   // Sempre que o offset é alterado esse useEffect é acionado, sendo assim, sempre que clicar no botão para mudar de página 
                      // os pokemons são alterados de acordo com com os argumentos passados no método getPokemons
      
      return <GetPokemonsContext.Provider value={{ pokemonsPerPage, offset, pokemons }}>{children}</GetPokemonsContext.Provider>
      
}

