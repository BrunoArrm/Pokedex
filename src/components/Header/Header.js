import React from 'react';
import IsLoading from '../IsLoading/IsLoading';
import Searchbar from '../Searchbar/Searchbar';
import './Header.css';

const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="PokéApi" title="PokéApi"/>
      <Searchbar />
    </header>
  )
}

export default Header;