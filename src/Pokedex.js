import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ data }) => {
  return (
    <>
      <h2 className='Pokedex-title'>Pokedex</h2>
      <div>
        {data.map((el) => (
          <Pokecard key={el.id} id={el.id} name={el.name} type={el.type} exp={el.base_experience} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
