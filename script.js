const pokemonContainer = document.getElementById("pokeContainer");
const pokemonNumber = 30;

// color of type each element pokemon
const colors = {
    fire: '#ed254e',
    grass: '#b1eb1e',
    electric: '#fffa00',
    water: '#1dbde6',
    ground: '#a88800',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#4b0082',
    bug: '#ffce0a',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#d6daff',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

const mainType = Object.keys(colors);

// function call the number of pokemon
const fetchPokemon = async() => {
    for (let i = 1; i <= pokemonNumber; i++) {
        await getPokemon(i);
    }
}

// get the pokemon API

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const result = await fetch(url);
    const pokemonData = await result.json();

    createPokemonCard(pokemonData);

}

// display console.log 

// const getPokemon = async id => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const result = await fetch(url);
//     const pokemonData = await result.json();

//     console.log(pokemonData);

// }
// getPokemon(1);

// end

function createPokemonCard(pokemonData) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    // make the variable for pokemon data
    const name = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
    const pokeType = pokemonData.types.map(el => el.type.name);
    const type = mainType.find(type => pokeType.indexOf(type) > -1);

    const color = colors[type];

    pokemonElement.style.backgroundColor = color;

    const pokeInnerHTML = `
    <div class="pokemon-imgContainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png" alt="">
    </div>

    <div class="info">
        <span class="numberPokemon">#${pokemonData.id}</span>
        <h4 class="namePokemon">${name}</h4>
        <small class="type">Element: <span>${type}</span></small>
    </div>
    `;

    pokemonElement.innerHTML = pokeInnerHTML;

    pokemonContainer.appendChild(pokemonElement);
}

fetchPokemon();