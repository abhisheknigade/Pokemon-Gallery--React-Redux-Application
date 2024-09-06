
// export const fetchPokemonDetails = async (pokemonName) => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//   const data = await response.json();
//   return {
//     name: data.name,
//     id: data.id,
//     image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`, // Image URL
//     height: data.height,
//     weight: data.weight,
//     abilities: data.abilities.map(ability => ability.ability.name).join(', ')
//   };
// };
