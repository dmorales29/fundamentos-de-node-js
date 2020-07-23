//El process se refire a los procesos y el env se refiere a las variables de entorno
//Si node no recibe las variables de entorno desde el exterior por el || ejecutará el string definido
let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.MI_WEB || "no tengo";

console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);

//Para decir a node que la variable viene "desde fuera de node"
//Se ejecuta en la consola la VARIABLE=Variable
//Por buenas practicas las variables de entorno se definen en mayúscula y si son de más palabras se usa el _
