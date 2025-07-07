const urlAPI = `https://api.github.com/users`;

const form = document.getElementById(`form`);
const inputValue = document.getElementById(`userSearch`);
const profile = document.getElementById(`profile`);
const errorMessage = document.getElementById(`error-message`);
let searchQuery;

form.addEventListener("submit", (e) => {
  // Do stuff here
  e.preventDefault();
  searchUser(inputValue.value);
  inputValue.value = ``;
});

function searchUser(user) {
  searchQuery = urlAPI + "/" + user;

  fetch(searchQuery) // Replace 'octocat' with your desired username
    .then((response) => {
      if (!response.ok) {
        // Handle HTTP errors (e.g., 404 Not Found, 403 Forbidden)
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse the JSON data
    })
    .then((data) => {
      // 'data' now contains the user's information as a JavaScript object
      console.log(data);
      // Now, use this data to populate your HTML card
      displayUserData(data);
    })
    .catch((error) => {
      // console.error("Error fetching GitHub user data:", error);
      // Display an error message to the user
      clearUserData();
      displayErrorMessage();
    });
}

function displayUserData(user) {
  errorMessage.classList.add("hidden");
  profile.classList.remove("hidden");

  document.getElementById("profile-name").textContent =
    "" + user.login || user.name;
  document.getElementById("image").src = user.avatar_url;
  document.getElementById("profile-bio").textContent = user.bio;
  document.getElementById("stats-followers").textContent =
    "Followers: " + user.followers;
  document.getElementById("stats-following").textContent =
    "Following: " + user.following;
  document.getElementById("stats-repos").textContent =
    "Repos: " + user.public_repos;
  document.getElementById("image").setAttribute("href", user.html_url);
}

function displayErrorMessage() {
  errorMessage.classList.remove("hidden");
}

function clearUserData() {
  profile.classList.add("hidden");
}
