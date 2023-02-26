import React, { createContext } from 'react';

export const GetFavoriteListContext = createContext();

export const GetFavoriteListProvider = ({ children }) => {


    return <GetFavoriteListProvider.Provider value={{}}>
        {children}
    </GetFavoriteListProvider.Provider>
}