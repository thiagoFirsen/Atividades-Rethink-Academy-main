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

//Listar todos os pokemons de um mesmo tipo

const searchPokemonType = (sameType) => {
  return pokemons.filter((pokemon) => pokemon.type.includes(sameType));
};

console.log(searchPokemonType("grass"));

//Alterar o nome dos tipos dos pokemons de inglês para português, ex.: Fire => Fogo

//Alterar o nome dos tipos dos pokemons de inglês para português, ex.: Fire => Fogo

//Adicionando todos os types em uma unica lista
let arrayOfTypes = [];

const pokemonTypeEnglishList = (listOfPokemons) => {
  return pokemons.map((pokemon) => {
    arrayOfTypes.push(pokemon.type);
    return arrayOfTypes;
  });
};

pokemonTypeEnglishList(pokemons);

//Removendo array de array e transformando em array unico
arrayOfTypes = arrayOfTypes.flat();

//Removendo duplicadas
arrayOfTypes = [...new Set(arrayOfTypes)];

//Visualizando tipos em ingles
console.log(arrayOfTypes);

//Objeto traduzido
const pokemonTypesInPortuguese = {
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

const translate = (listOfPokemonsTraduzidos) => {
  return pokemons.map((pokemon) => {
    for (let i = 0; i < pokemon.type.length; i++) {
      pokemon.type[i] = listOfPokemonsTraduzidos[pokemon.type[i]];
    }
    return pokemon;
  });
};

console.log(translate(pokemonTypesInPortuguese));
