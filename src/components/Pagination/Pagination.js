import React, { useContext } from 'react';
import { PaginationContext } from '../Context/PaginationContext';
import './Pagination.css';

function Pagination() {
    const { pageBack, pageFoward, totalPages, page, offset } = useContext(PaginationContext);
  return (
    <div className='pagination'>
        <button onClick={() => pageBack()}>◀️</button>
        <p>{`Página ${page} de ${totalPages}`}</p>
        <button onClick={() => pageFoward()}>▶️</button>
    </div>
  )
}

export default Pagination