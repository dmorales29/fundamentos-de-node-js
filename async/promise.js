function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adiós " + nombre);
      resolve();
    }, 2000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla Bla Bla...");
      resolve(nombre);
      //reject("Hay un error...");
    }, 1000);
  });
}

console.log("Iniciando proceso...");
hola("David")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminando proceso....");
  })
  .catch((error) => {
    console.error("Ha habido un error:");
    console.error(error);
  });

//Las promesas son una sintaxis mas elegante y legible de realizar callbacks, creando así un código mucho más escalable y entendible para todas las personas.
//Una promesa al final no deja de ser un callback
//Para utilizar una promesa solo debemos de instanciar una nueva, una promesa en si es una función que recibe dos parámetros, resolve y reject, que son los dos estados de una promesa.
//Utilizamos resolve para retornar el valor deseado cuando una función se ejecute y utilizamos reject para cuando una función retorna un valor no deseado.

//Para poder obtener los valores que retorna una función debemos utilizar su propiedad .then,
//esta propiedad es una función que recibe un callback el cual tendrá como parámetro el valor retornado con resolve o reject.
//Siempre que usemos una promesa además de realizar la propiedad .then debemos invocar la propiedad .catch,
//la cual es un callback que recibe como parámetro el error ocurrido en caso de haber sucedió uno.
