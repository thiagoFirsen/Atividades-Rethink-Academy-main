import { pokemons } from "./data.js";

//Listar todos os pokemons de um mesmo tipo

const searchPokemonType = (sameTypePokemon) => {
  return pokemons.filter((pokemon) => pokemon.type.includes(sameTypePokemon));
};

console.log(searchPokemonType("grass"));
