const h1 = document.getElementById("titleweb");

const button = document.querySelector(".btn-primary");

button.addEventListener("click", ()=> {
    h1.textContent = "texto desde Js";
    h1.style.backgroundColor = "red";
    h1.style.color = "white";

});
