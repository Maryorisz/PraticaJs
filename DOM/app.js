// console.log(document);

console.log(document.getElementById("titleweb"));
console.log(document.getElementById("titleweb").textContent);

// Utilizando el querySelector

console.log (document.querySelector("#titleweb"));
// como es un id tenemos que poner el # como en Css

// tambien podemos seleccionarlo con la clase 
console.log (document.querySelector(".text-primary"));

console.log(document.querySelector("h1"));



// con este solo seleccionamos el primero que coincida con la misma clase
console.log(document.querySelector(".text-danger"));


// ahora si queremos que nos seleccione todos los q coinciden con la misma clase utilizamos

console.log(document.querySelectorAll(".text-danger"));


// si solo queremos seleccionar los que estan dentro del div

console.log(document.querySelectorAll(".container .text-danger"));
