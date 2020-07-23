//Nodemon es una herramienta que se ocupa en desarrollo
//Nodemon nos ayuda a ejecutar el archivo y que tenga "hotreload" al detectar cambios
//Para instalarlo es npm install -g nodemon
//Para ejecutarlo es nodemon (n) que n es el archivo en el que estamos trabajando
//Para Windows se debe correr npx nodemon (n)

console.log("test");
console.log("another test");

//PM2 es una herramienta para usar en producción
//Es parecido a nodemon pero más avanzada y compleja
//Para instalarlo es npm install -g pm2
//Para ejecutarlo es pm2 start (n) que n es el archivo en el que estamos trabajando
//Para Windows se debe correr npx pm2 start (n)
//El comando pm2 monitor sirve para monitorear cómo va en producción algo
//Para saber que tenemos o no tenemos corriendo lo vemos con pm2 status
//Los logs no se muestran porque es una herramienta pra producción, para ver los logs es con pm2 logs
//Para parar los procesos corriendo es con pm2 stop (n), n es para un archivo en específico, una ruta o con el id
