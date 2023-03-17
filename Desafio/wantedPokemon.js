import { pokemons } from "./data.js";

//Procurar um pokemon por nome
const searchPokemon = (wantedPokemon) => {
  return pokemons.find((pokemon) => {
    if (pokemon.name === wantedPokemon) {
      return pokemon;
    }
  });
};

console.log(searchPokemon("bulbasaur"));
