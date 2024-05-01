console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");


// //¿Qué tareas se consideran macrotareas y cuáles son microtareas?
// respuesta:se consideran macrotareas las web APIs del navegador, en este caso son los setTimeout, y las microtareas de las web APIs del navegador son las promesas


// ¿Cómo se relacionan las macrotareas y microtareas con el event loop?
//el event loop primero le da priorida a las tareas propias de JavaScript, despues agrega a la cola de tareas a las macrotareas luego a las microtaras.

// ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
// las macrotareas se van task queue y revisa si no hay microtareas pendientes, si hay le da la prioridad a las microtareas y despues que no hayan mas, ahi se ejecutan las macrotareas

// ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
// las promesas se manejan como microtareas, al igual que los callbacks, async/await y los setTimeout se manejan como macrotaras al igual que DOM o fetch