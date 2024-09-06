// src/redux/reducer.js

import { SET_POKEMONS, SET_SELECTED_POKEMON, SET_RANDOM_POKEMON } from './actions';

const initialState = {
  pokemons: [],
  selectedPokemon: null,
  randomPokemon: null
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_SELECTED_POKEMON:
      return { ...state, selectedPokemon: action.payload };
    case SET_RANDOM_POKEMON:
      return { ...state, randomPokemon: action.payload };
    default:
      return state;
  }
};

export default reducer;
