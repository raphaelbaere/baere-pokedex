const input = document.querySelector('#pokemon-search-input');

const button = document.querySelector('#pokemon-search-button');

const fetchPokémon = async (pokemonName) => {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokémonObj = await response.json();
    appendCard(pokémonObj);
    } catch(error) {
        console.log(error);
    }
}

const appendCard = (pokemonObj) => {
    const officialArtwork = 'official-artwork';
    const zero = '0';
    const onee = '1';
    const section = document.querySelector('#pokemon-card-section');
    section.innerHTML = '';
    const pokemonCardContainer = document.createElement('div');
    pokemonCardContainer.id = "pokemon-card-container";
    const pokemonCard = document.createElement('div');
    pokemonCard.id = "pokemon-card";
    const pokemonCardHeader = document.createElement('div');
    pokemonCardHeader.id = "pokemon-card-header";
    const pokemonCardName = document.createElement('h1');
    pokemonCardName.id = "pokemon-card-name";
    pokemonCardName.innerHTML = `${pokemonObj.name.toUpperCase()} #${pokemonObj.id}`;
    const pokemonCardType1 = document.createElement('h2');
    pokemonCardType1.id = "pokemon-card-type1";
    pokemonCardType1.innerHTML = `${pokemonObj.types[zero].type.name.toUpperCase()} `;
    const pokemonCardImg = document.createElement('img');
    pokemonCardImg.id = "pokemon-card-img";
    pokemonCardImg.src = pokemonObj.sprites.other[officialArtwork].front_default;
    const pokemonCardDesc = document.createElement('p');
    pokemonCardDesc.id = "pokemon-card-desc";
    pokemonCardDesc.innerHTML = `Weight: ${pokemonObj.weight} | Height: ${pokemonObj.height}`;
    const pokemonCardPower = document.createElement('p');
    pokemonCardPower.id = "pokemon-card-power";
    const pokemonCardDivisor = document.createElement('div');
    pokemonCardDivisor.classList.add('pokemon-card-divisor');
    const pokemonCardMove = document.createElement('p');
    pokemonCardMove.id = "pokemon-card-move";
    const pokemonCardDivisor2 = document.createElement('div');
    pokemonCardDivisor2.classList.add('pokemon-card-divisor');
    const pokemonCardWeakness = document.createElement('h4');
    pokemonCardWeakness.id = "pokemon-card-weakness";
    const pokemonCardResistance = document.createElement('h4');
    pokemonCardResistance.id = "pokemon-card-resistance";
    const pokemonCardDivisor3 = document.createElement('div');
    pokemonCardDivisor3.classList.add('pokemon-card-divisor');
    pokemonCardDivisor3.classList.add('yellow');
    const pokemonCardCuriosity = document.createElement('p');
    pokemonCardCuriosity.id = "pokemon-card-curiosity";

    section.appendChild(pokemonCardContainer);
    pokemonCardContainer.appendChild(pokemonCard);
    pokemonCard.appendChild(pokemonCardName);
    pokemonCard.appendChild(pokemonCardHeader);
    pokemonCardHeader.appendChild(pokemonCardType1);
    pokemonCard.appendChild(pokemonCardImg);
    pokemonCard.appendChild(pokemonCardDesc);
    switch (pokemonObj.types[zero].type.name) {
        case 'fire':
            pokemonCard.classList.add('fire');
        break;
        case 'fighting':
            pokemonCard.classList.add('fighting');
        break;
        case 'water':
            pokemonCard.classList.add('water');
        break;
        case 'grass':
            pokemonCard.classList.add('grass');
        break;
        case 'ice':
            pokemonCard.classList.add('ice');
        break;
        case 'ghost':
            pokemonCard.classList.add('ghost');
        break;
        case 'poison':
            pokemonCard.classList.add('poison');
        break;
        case 'steel':
            pokemonCard.classList.add('steel');
        break;
        case 'ground':
            pokemonCard.classList.add('ground');
        break;
        case 'dark':
            pokemonCard.classList.add('dark');
        break;
        case 'bug':
            pokemonCard.classList.add('bug');
        break;
        case 'electric':
            pokemonCard.classList.add('electric');
        break;
        case 'normal':
            pokemonCard.classList.add('normal');
        break;
        case 'flying':
            pokemonCard.classList.add('flying');
        break;
        case 'dragon':
            pokemonCard.classList.add('dragon');
        break;
        case 'rock':
            pokemonCard.classList.add('rock');
        break;
        case 'psychic':
            pokemonCard.classList.add('psychic');
        break;
        case 'fairy':
            pokemonCard.classList.add('fairy');
        break;
    }

    if (Object.keys(pokemonObj.types[onee].type).length === 2) {
        const pokemonCardType2 = document.createElement('h2');
        pokemonCardType2.id = "pokemon-card-type2";
        pokemonCardType2.innerHTML = `and ${pokemonObj.types[onee].type.name.toUpperCase()}`;
        pokemonCardHeader.appendChild(pokemonCardType2);
    }
}

button.addEventListener('click', () => {
    fetchPokémon(input.value.toLowerCase());
})

