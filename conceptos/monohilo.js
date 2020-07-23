console.log("Hola mundo");

// setInterval(function () {
//   console.log("Sigo activo");
// }, 1000);

let i = 0;
setInterval(function () {
  console.log(i);
  i++;

  if (i === 5) {
    var a = 3 + z;
  }
}, 1000);

//Si un código como el anterior rompe la ejecución, todo lo demás deja de ejecutarse

//Esta segunda instrucción se ejecuta asíncronamente en node, por eso al ejecutarla lo hace antes del loop anterior que comienza a partir de 1 segundo
console.log("Segunda instrucción");

//con el comando "node (n)" se ejecuta el javascript "n"
