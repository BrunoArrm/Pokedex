import React from 'react';
import './Footer.css';
import Pagination from '../Pagination/Pagination';

function Footer() {
  return (
    <footer className='footer'>
        <Pagination />
        <div className='sign'>
            <p>Desenvolvido orgulhosamente por Bruno Arruda</p>
            <a href="https://github.com/BrunoArrm/pokedex" target="_blank">
                <div className='socialMedia github'></div>
            </a>
            <a href="https://linkedin.com/in/bruno-arruda-dev" target="_blank">
                <div className='socialMedia linkedin'></div>
            </a>
        </div>
    </footer>
  )
}

export default Footer