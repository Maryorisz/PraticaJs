const h1 = document.getElementById("titleweb");


// con esto me muestra la clase que tiene el h1, aqui estamos accediendo a las propiedades
console.log(h1.className);

// puedo mostrar el id
console.log(h1.id);
console.log(h1.tagName);
console.log(h1.textContent);


// tambien podemos modificar 

h1.textContent = "Nuevo texto desde Js"
h1.style.backgroundColor = "red";
h1.style.color = "white";