
import React from 'react';

const List = ({ pokemons, onSelectPokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, index) => (
        <div
          key={index}
          className="pokemon-card"
          onClick={() => {
            fetch(pokemon.url)
              .then(response => response.json())
              .then(data => onSelectPokemon(data));
          }}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
            alt={pokemon.name}
          />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
