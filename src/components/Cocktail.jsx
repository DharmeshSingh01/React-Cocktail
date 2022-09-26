import React from 'react';
import { Link } from 'react-router-dom';

export default function Cocktail({
  idDrink,
  strDrink,

  strAlcoholic,
  strGlass,
  strDrinkThumb,
}) {
  return (
    <article className='cocktail'>
      <div className='img-conatiner'>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link
          to={`/cocktail/${idDrink}`}
          className='btn btn-primary btn-details'
        >
          Details
        </Link>
      </div>
    </article>
  );
}
