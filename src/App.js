// src/App.js

import React, { useState, useEffect } from 'react';
import './styles.css';
import List from './components/List';
import Detail from './components/Detail';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);



  useEffect(() => {
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=300')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results); 
        
        const randomPokemon = data.results[Math.floor(Math.random() * data.results.length)];
        fetch(randomPokemon.url)
          .then(response => response.json())
          .then(pokemonData => setSelectedPokemon(pokemonData));
      });
  }, []);

  

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const deselectPokemon = () => {
    setSelectedPokemon(null);
  };


  return (
    <div >

      <div className='heading'>
      <h1>Pokemon Gallery</h1>
      </div>
      


      <div className="app">

      <div>
       <List pokemons={pokemons} onSelectPokemon={handleSelectPokemon} />
      </div>
     
     <div>
     <Detail selectedPokemon={selectedPokemon} deselectPokemon={deselectPokemon} />
     </div>
     
      </div>

     
    </div>
  );
};

export default App;
