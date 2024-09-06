// src/redux/actions.js

export const SET_POKEMONS = 'SET_POKEMONS';
export const SET_SELECTED_POKEMON = 'SET_SELECTED_POKEMON';
export const SET_RANDOM_POKEMON = 'SET_RANDOM_POKEMON';

export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  payload: pokemons
});

export const setSelectedPokemon = (pokemon) => ({
  type: SET_SELECTED_POKEMON,
  payload: pokemon
});

export const setRandomPokemon = (pokemon) => ({
  type: SET_RANDOM_POKEMON,
  payload: pokemon
});
