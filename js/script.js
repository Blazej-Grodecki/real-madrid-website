{
  const welcome = () => {
    console.log("Hello World! Ten kod został już wysłany do repozytorium Git.")
  }

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const blueTheme = document.querySelector(".js-blueTheme");
    
    body.classList.toggle("body--dark");

    if (body.classList.contains("body--dark")) {
      blueTheme.innerText = "Szary";
    } else {
      blueTheme.innerText = "Niebieski";
    }
  };

  const init = () => {
    const button = document.querySelector(".js-changeTheme");
    button.addEventListener("click", toggleBackground);

    welcome()
  }

  init()

}