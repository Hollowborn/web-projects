const colorVars = [
  "var(--color-one)",
  "var(--color-two)",
  "var(--color-three)",
  "var(--color-four)",
];
const popSound = new Audio("pop.mp3");
const selectSound = new Audio("select.wav");
document.querySelectorAll(".box").forEach((box, index) => {
  box.addEventListener("mouseover", () => {
    const randomColor = colorVars[Math.floor(Math.random() * colorVars.length)];
    box.style.backgroundColor = randomColor;
    // selectSound.play();
    box.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`; // Add shadow on hover
  });
  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
    box.style.boxShadow = "0 0 10px #333"; // Reset to original color
  });
  box.addEventListener("click", () => {
    popSound.play();
  });
});
