const testimonies = [
  {
    name: "Mike Wazoskiee",
    title: "Monstah",
    message: "This guy knows!!",
    src: "./images/mike.jpg",
  },
  {
    name: "John Cena",
    title: "Professional WWE Wrestler",
    message: "You can't see me. My time is now.",
    src: "./images/cena.jpg",
  },
  {
    name: "Tim Cook",
    title: "Professional Cooker",
    message:
      "This guys cooks, btw. Hire him, make him rich. Do it so, and he will make you more rich.",
    src: "./images/tim.webp",
  },
  {
    name: "Pikachu",
    title: "pikapika",
    message:
      "pika pika, pikachu!! pikachu? p i k a c h u?? pika pika pika pika... CHUUUUUU!!!!!",
    src: "./images/pikachu.jpg",
  },
  {
    name: "Picori",
    title: "ricopico",
    message: "ripo pico picori, ripo rici? picori?",
    src: "./images/picori.jpg",
  },
];

const testimonyMessage = document.getElementById("msg");
const testimonyImage = document.getElementById("img");
const testimonyTitle = document.getElementById("title");
const testimonyName = document.getElementById("name");
const loadBar = document.getElementById("bar");

let durationMs = 5000;
let index = 0;
let length = 0;
//function to always change
setInterval(changeText, durationMs);

loadBar.style.width = `0` + `%`;

function changeText() {
  loadBar.style.width = "0%";
  testimonyMessage.textContent = testimonies[index].message;
  testimonyImage.src = testimonies[index].src;
  testimonyTitle.textContent = testimonies[index].title;
  testimonyName.textContent = testimonies[index].name;
  index++;

  loadBar.style.width = `100%`;

  // loadBar.style.width = `0%`;
  if (index >= 4) {
    index = 0;
  }
}
