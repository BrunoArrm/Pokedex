import React, { useContext, useState } from 'react';
import './Searchbar.css';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';

function Searchbar() {
  const { updatePokemonName } = useContext(GetPokemonDataContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleButtonClick = () => {
    if (inputValue === "") {
      console.log(`Nada foi digitado!`)
    } else {
      let inputValueFix = inputValue.trim();
      inputValueFix = inputValueFix.toLocaleLowerCase();
      updatePokemonName(inputValue);
      console.log(`Enviado para busca: ${inputValueFix}`);
    }
  } 

  return (
    <div className='searchbar'>
        <input placeholder='Procurar um monstrinho' value={inputValue} onChange={handleInputChange}></input>
        <button onClick={handleButtonClick} onPress={handleButtonClick}></button>
    </div>
  )
}

export default Searchbar;