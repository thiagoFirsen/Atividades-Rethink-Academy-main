import { pokemons } from "./data.js";

//Alterar o nome dos tipos dos pokemons de inglês para português, ex.: Fire => Fogo

//Adicionando todos os types em uma unica lista
let arrayOfTypes = [];

const listPokemonTypesIntoEnglish = (listOfPokemons) => {
  return pokemons.map((pokemon) => {
    arrayOfTypes.push(pokemon.type);
    return arrayOfTypes;
  });
};

listPokemonTypesIntoEnglish(pokemons);

//Removendo array de array e transformando em array unico
arrayOfTypes = arrayOfTypes.flat();

//Removendo duplicadas
arrayOfTypes = [...new Set(arrayOfTypes)];

//Visualizando tipos em ingles
console.log(arrayOfTypes);

//Objeto traduzido
const pokemonTypesIntoPortuguese = {
  normal: "normal",
  fire: "fogo",
  water: "água",
  grass: "grama",
  flying: "voador",
  fighting: "lutador",
  poison: "veneno",
  electric: "elétrico",
  ground: "terra",
  rock: "pedra",
  psychic: "psíquico",
  ice: "gelo",
  bug: "inseto",
  ghost: "fantasma",
  steel: "ferro",
  dragon: "dragão",
  dark: "sombrio",
  fairy: "fada",
};

//Traduzindo array no objeto

const translate = (listOfTranslatedPokemons) => {
  return pokemons.map((pokemon) => {
    for (let i = 0; i < pokemon.type.length; i++) {
      pokemon.type[i] = listOfTranslatedPokemons[pokemon.type[i]];
    }
    return pokemon;
  });
};

console.log(translate(pokemonTypesIntoPortuguese));
