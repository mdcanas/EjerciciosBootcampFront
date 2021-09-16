import fetch from './practicaReact/node_modules/node-fetch/@types';

let pokemones = [];
async function favoritePokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    const data = await response.json();

    console.log(data);
}

async function pokemonList(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=1&limit=15');
    const data = await response.json();
    return data;
}

async function pokemonWeight(fn){

}


pokemonList();
