const search_bar = document.getElementById("search-bar");
const search_button = document.getElementById("btn");
let searchState = 0;

search_button.addEventListener("click", () => {
  if (searchState === 0) {
    searchState++;
    search_bar.classList.remove("hidden");
  } else {
    searchState--;
    search_bar.classList.add("hidden");
  }
});
