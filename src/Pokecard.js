import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, exp }) => {
  let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className='Pokecard'>
      <h5 className='Pokecard-name'>{name}</h5>
      <img className='Pokecard-img' src={img} alt=''></img>
      <ul className='Pokecard-text'>
        <li>Type: {type}</li>
        <li>EXP: {exp}</li>
      </ul>
    </div>
  );
};

export default Pokecard;
