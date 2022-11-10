console.log("Hello World! Ten kod został już wysłany do repozytorium Git.")

let button = document.querySelector(".js-changeTheme");
let body = document.querySelector(".body");
let blueTheme = document.querySelector(".js-blueTheme");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

if (body.classList.contains("dark")) {
    blueTheme.innerText = "Szary";
  } else {
    blueTheme.innerText = "Niebieski";
  }
});
