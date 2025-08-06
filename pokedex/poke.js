const container = document.getElementById("container");
const count = 100;
const types = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const getPokemons = async () => {
  for (i = 1; i <= count; i++) {
    await fetchPokemons(i);
  }
};

const fetchPokemons = async (index) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
  const result = await fetch(url);
  const data = await result.json();
  generateCard(data);
};

const generateCard = (pokemon) => {
  const pokeEl = document.createElement("div");
  pokeEl.classlist.add("poke-card");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(0);
  const id = pokemon.id;
  const type1 = pokemon.types[0].type.name;

  pokeEl.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="" />
        <div class="poke-desc">
          <div class="poke-name">${name}</div>
          <div class="poke-type">
            <div class="type-1">${type1}</div>
            <div class="type-2">Grass</div>
          </div>
        </div>
  `;
  container.appendChild(pokeEl);
};

getPokemons;
