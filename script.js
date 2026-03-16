const searchBtn = document.getElementById('searchBtn');
const pokemonInput = document.getElementById('pokemonInput');
const card = document.getElementById('card');
const errorMsg = document.getElementById('error');

const typeColors = {
    fire: '#FDDFDF', grass: '#DEFDE0', electric: '#FCF7DE', water: '#DEF3FD',
    ground: '#F4E7DA', rock: '#D5D5D4', fairy: '#FCEAFF', poison: '#98D7A5',
    bug: '#F8D5A3', dragon: '#97B3E6', psychic: '#EAEDA1', flying: '#F5F5F5',
    fighting: '#E6E0D4', normal: '#F5F5F5', ghost: '#DAC9DF', steel: '#D1D1D1',
    ice: '#E0F1FD', dark: '#A19188'
};

async function getPokemon() {
    const nameOrId = pokemonInput.value.toLowerCase().trim();
    
    if (!nameOrId) return;

    // Limpa estados anteriores
    card.classList.add('hidden');
    errorMsg.classList.add('hidden');

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        
        if (!response.ok) throw new Error("Não encontrado");

        const data = await response.json();
        
        // Renderização dos dados
        document.getElementById('pokeName').textContent = data.name;
        
        // Aqui está o segredo: usar a imagem oficial em alta resolução
        const imgUrl = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;
        document.getElementById('pokeImage').src = imgUrl;
        
        document.getElementById('pokeInfo').textContent = `Peso: ${data.weight / 10}kg | Altura: ${data.height / 10}m`;
        
        const typesContainer = document.getElementById('pokeTypes');
        typesContainer.innerHTML = data.types.map(t => `<span>${t.type.name}</span>`).join('');

        // Cor de fundo
        const mainType = data.types[0].type.name;
        card.style.backgroundColor = typeColors[mainType] || '#FFFFFF';
        
        // Mostra o card
        card.classList.remove('hidden');

    } catch (err) {
        console.error(err);
        errorMsg.classList.remove('hidden');
    }
}

// Eventos
searchBtn.addEventListener('click', getPokemon);

pokemonInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getPokemon();
});