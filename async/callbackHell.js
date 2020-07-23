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

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla Bla Bla...");
    callbackHablar();
  }, 1000);
}

function conversacion(nombre, veces, callbackHablar) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callbackHablar);
    });
  } else {
    adios(nombre, callbackHablar);
  }
}

console.log("Iniciando proceso...");
hola("David", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Terminando proceso...");
  });
});

//Los callback Hell se dan cuando empiezo a pasar una función como parámetro que a su vez llama a otra función como parámetro, y así hasta n.
//Una estrategia para trabajar con estas estructuras lógicas tan monolíticas es usar estructuras de control y funciones recursivas.
//Las funciones recursivas se llaman así mismas y mediante la estructura de control le digo cuantas veces voy a necesitar llamar la función así misma.
