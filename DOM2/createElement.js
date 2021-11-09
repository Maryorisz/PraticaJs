// elemento donde vamos a incoporar los li 
const listaDinamica = document.querySelector("#listaDinamica");


// creamos el li
const li = document.createElement("li");

// agregamos texto al li
li.textContent = "Item desde Js";

// ahora tenemos que empujarlo al DOM, en este caso lo incorporamos al ul
listaDinamica.appendChild(li);