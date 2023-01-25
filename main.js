let elementBoton = document.querySelector(".box__button");
let elementInput = document.querySelector(".box__input");
let elementResultado = document.querySelector(".box-answer__output");

const URL = "https://api.agify.io?name=";

function pintarResultado(age) {
  elementResultado.textContent = age;
}

function adivinarEdad(nombre) {
  let urlCompleta = URL + nombre;

  fetch(urlCompleta)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      if (respuesta.age === null) {
        elementResultado.textContent = "-";
        throw new Error('Lo sentimos no hemos podido adivinar tu edad')
      } else {
        pintarResultado(respuesta.age);
      }
    })
    .catch((error) => console.log(error));
}

elementBoton.addEventListener("click", function () {
  adivinarEdad(elementInput.value);
});
