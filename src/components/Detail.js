// src/components/Detail.js

import React from 'react';

const Detail = ({ selectedPokemon, deselectPokemon }) => {
  if (!selectedPokemon) {
    return <div className="pokemon-detail">
      <h2>Select a Pokemon to see details!</h2></div>;
  }

  return (
    
    <div className="pokemon-detail">
     
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`}
        alt={selectedPokemon.name}
      />


      <h2>{selectedPokemon.name}</h2>
      <p><strong>Height:</strong> {selectedPokemon.height / 10} m</p>
      <p><strong>Weight:</strong> {selectedPokemon.weight / 10} kg</p>
      <p><strong>Abilities:</strong> {selectedPokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
      
      <button className="deselect-button" onClick={deselectPokemon}>
        Deselect
      </button>
    </div>
  );
};

export default Detail;
