// function asycnFunction(miCallback) {
//   console.log("Soy una función asíncrona..");

//   setTimeout(function () {
//     console.log("Asincronía...");
//     miCallback();
//   }, 5000);
// }

// console.log("Iniciando proceso...");
// asycnFunction(function () {
//   console.log("Terminando proceso...");
// });

function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adiós " + nombre);
    otroCallback();
  }, 2000);
}

//Con los callback sabemos que debe ejecutarse primero y qué después(ya que en casos no sabemos cuánto va tardar una petición), resolviendo el asincronísmo
//Los callbacks pueden compartir información cuando le pasamos la variable en la función del callback
console.log("Iniciando proceso...");
hola("David", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso...");
  });
});

//Si no usamos callbacks como en este ejemplo si la función adios() es más rápida imprmirá antes que el hola()
// hola(nombre, function () {});
// adios(nombre, function () {});
// console.log("Terminando proceso...");
