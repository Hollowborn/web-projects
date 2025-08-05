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


function getPokemons(){
    for(i = 1; i <= count; i++){
        fetchPokemons(i);
    }
}

function fetchPokemons(index){
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    const result = await fetch(url);
    const data = await result.json();
    generateCard(data);
}

function generateCard(pokemon){

}