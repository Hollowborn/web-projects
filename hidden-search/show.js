const search_bar = document.getElementById("search-bar");
const search_button = document.getElementById("btn");
const search_input = document.getElementById("input");
const soundPop = new Audio((src = "pop.mp3"));

let searchState = 0;

search_button.addEventListener("click", () => {
  soundPop.currentTime = 0; // Reset sound to start
  soundPop.play();
  if (searchState === 0) {
    searchState++;
    search_bar.classList.remove("hidden");
    search_button.style.borderRadius = "0px 6px 6px 0px";
    search_input.focus();
  } else {
    searchState--;
    search_bar.classList.add("hidden");
    search_button.style.borderRadius = "6px";
  }
});
